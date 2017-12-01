import React, {Component} from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

import checkUserSession from '../lib/checkUserSession';
import redirect from '../lib/redirect';
import withData from '../lib/withData';
import Page from '../layouts';

class PostCreate extends Component {
    static async getInitialProps(context, apolloClient) {
        const {userSession} = await checkUserSession(context, apolloClient);

        if (!userSession.user) {
            redirect(context, '/login');
        }

        return {};
    }

    render() {
        return (
            <Page title="Добавить пост">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Добавить пост</h1>
                    </div>
                    <div className="col-md-8">
                        <form onSubmit={this.props.submit}>
                            <div className="form-group">
                                <label htmlFor="title">Заголовок</label>
                                <input type="text" name="title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="slug">ЧПУ</label>
                                <input type="text" name="slug"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Описание</label>
                                <textarea name="description" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">URL Изображения</label>
                                <input type="text" name="imageUrl"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">Текст</label>
                                <textarea name="text" rows="6"></textarea>                            
                            </div>

                            <button className="submit--button">Создать</button>
                        </form>
                    </div>
                </div>

                <style jsx>{`
                    .form-group {}

                    .form-group label {
                        display: block;
                        font-weight: bold;
                    }

                    .form-group input, .form-group textarea {
                        border: none;
                        outline: none;
                        border-bottom: 1px solid #000;
                        padding: 4px;
                        width: 100%;
                        display: block;
                    }

                    .submit--button {
                        border: none;
                        background-color: #000;
                        color: #fff;
                        padding: 4px 16px;
                    }
                `}</style>
            </Page>
        );
    }
}

export default compose(
    withData,
    withApollo,
    graphql(
        gql`
            mutation CreatePost($title: String!, $slug: String!, $imageUrl: String!, $description: String!, $text: String!) {
                createPost(title: $title, slug: $slug, imageUrl: $imageUrl, description: $description, text: $text) {
                    slug
                }
            }
        `,
        {
            name: 'createPost',
            props: ({
                createPost, ownProps: {client}
            }) => ({
                submit: (event) => {
                    const data = new FormData(event.target);

                    event.preventDefault();
                    event.stopPropagation();

                    createPost({
                        variables: {
                            title: data.get('title'),
                            slug: data.get('slug'),
                            imageUrl: data.get('imageUrl'),
                            description: data.get('description'),
                            text: data.get('text'),
                        }
                    }).then(({data : {createPost: {slug}}}) => {
                        redirect({}, `post/${slug}`);
                    }).catch(error => console.log('error', error));
                }
            })
        }
    )
)(PostCreate);