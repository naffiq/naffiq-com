import * as React from "react";
import { Editor, createEditorState } from "medium-draft";
import { convertToRaw } from "draft-js";

import "./index.scss";
import { Mutation, MutationFn } from "react-apollo";
import { CREATE_POST } from "./graphql";

interface State {
  editorState: any;
  title: string;
}

class BlogComposePage extends React.Component<{}, State> {
  state = {
    editorState: null,
    title: ""
  };

  refsEditor: any;
  titleRef: any;

  constructor(props) {
    super(props);

    const storedState = localStorage.getItem("new-blog-post-body");

    this.state = {
      editorState: createEditorState(
        storedState ? JSON.parse(storedState) : null
      ),
      title: localStorage.getItem("new-blog-post-title") || ""
    };
    this.refsEditor = React.createRef();
  }

  componentDidMount() {
    this.refsEditor.current.focus();
  }

  handleChange = editorState => {
    this.setState({ editorState });

    localStorage.setItem(
      "new-blog-post-body",
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value });
    localStorage.setItem("new-blog-post-title", e.target.value);
  };

  /**
 * // Mutation related interfaces
interface INewPost {
  title: string;
  description: string;
  body: string;
  image: string;
  isActive: boolean;
}
 */

  handleSave(createPostMutation: MutationFn) {
    createPostMutation({
      variables: {
        newPost: {
          title: this.state.title,
          body: JSON.stringify(
            convertToRaw(this.state.editorState.getCurrentContent())
          ),
          image: "",
          isActive: false
        }
      }
    });
  }

  render() {
    const { editorState, title } = this.state;

    return (
      <Mutation mutation={CREATE_POST}>
        {createPost => (
          <div id="post-form-page" className="container narrow">
            <div className="post-container">
              <label className="title-label" htmlFor="title">
                New post:
              </label>
              <input
                type="text"
                name="title"
                placeholder="New post title"
                className="title-input"
                ref={ref => (this.titleRef = ref)}
                onChange={this.handleTitleChange}
                size={10}
                value={title}
              />
              <Editor
                ref={this.refsEditor}
                editorState={editorState}
                onChange={this.handleChange}
              />

              <div className="btn-publish--container">
                <button
                  className="btn-publish"
                  onClick={() => this.handleSave(createPost)}
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default BlogComposePage;
