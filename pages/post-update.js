import React, {Component} from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

import checkUserSession from '../lib/checkUserSession';
import redirect from '../lib/redirect';
import withData from '../lib/withData';
import Page from '../layouts';

class PostUpdate extends Component {
    static async getInitialProps(context, apolloClient) {
        const {userSession} = await checkUserSession(context, apolloClient);

        if (!userSession.user) {
            redirect(context, '/login');
        }

        const {data} = await apolloClient.query({
            query: gql`
                query getPost($slug: String!) {
                    Post(slug: $slug) {
                        id,
                        title,
                        slug,
                        imageUrl,
                        description,
                        text
                    }
                }
            `,
            variables: {
                slug: context.query.slug
            }
        });

        return {post: data.Post};
    }

    render() {
        const {post} = this.props;

        return (
            <Page title="Редактировать пост">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Редактировать пост</h1>
                    </div>
                    <div className="col-md-8">
                        <form onSubmit={this.props.submit}>
                            <input type="hidden" name="id" value={post.id}/>
                            <div className="form-group">
                                <label htmlFor="title">Заголовок</label>
                                <input type="text" name="title" value={post.title}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="slug">ЧПУ</label>
                                <input type="text" name="slug" value={post.slug}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Описание</label>
                                <textarea name="description" rows="3">{post.description}</textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">URL Изображения</label>
                                <input type="text" name="imageUrl" value={post.imageUrl}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">Текст</label>
                                <textarea name="text" rows="6">{post.text}</textarea>                            
                            </div>

                            <button className="submit--button">Сохранить</button>
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
            mutation UpdatePost($id: ID!, $title: String!, $slug: String!, $imageUrl: String!, $description: String!, $text: String!) {
                updatePost(id: $id, title: $title, slug: $slug, imageUrl: $imageUrl, description: $description, text: $text) {
                    slug
                }
            }
        `,
        {
            name: 'updatePost',
            props: ({
                updatePost, ownProps: {client}
            }) => ({
                submit: (event) => {
                    const data = new FormData(event.target);

                    event.preventDefault();
                    event.stopPropagation();

                    updatePost({
                        variables: {
                            id: data.get('id'),
                            title: data.get('title'),
                            slug: data.get('slug'),
                            imageUrl: data.get('imageUrl'),
                            description: data.get('description'),
                            text: data.get('text'),
                        }
                    }).then(({data : {updatePost: {slug}}}) => {
                        redirect({}, `/post/${slug}`);
                    }).catch(error => console.log('error', error));
                }
            })
        }
    )
)(PostUpdate);