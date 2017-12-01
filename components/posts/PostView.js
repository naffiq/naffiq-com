import React from 'react';
import Link from 'next/link';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';
import Markdown from 'react-remarkable';
import hljs from 'highlight.js';

import redirect from '../../lib/redirect';

moment.locale('ru-RU')

const PostView = ({post, isAuthorized, deletePost}) => {
    const updateLink = {pathname: '/post-update', query: {slug: post.slug}};
    const _renderSideMenu = () => {
        if (isAuthorized) {
            return (
                <ul className="side-menu">
                    <li>
                        <Link prefetch href={updateLink} as={`/post-update/${post.slug}`}>
                            <a>Редактировать пост</a>
                        </Link>
                    </li>
                    <li>
                        <a onClick={(event) => deletePost(event, post.id)}>Удалить пост</a>
                    </li>
                </ul>
            );
        }

        return <div/>;
    }

    return (
        <div className="row">
            <div className="col-md-3 text-right">
                <span>{moment(post.createdAt).format('MMMM d')}</span>

                {_renderSideMenu()}
            </div>
            <div className="col-md-9">
                <h1 className="post--title">{post.title}</h1>

                <img className="post--cover" src={post.imageUrl} alt=""/>

                <div className="post--text">
                    <Markdown 
                        source={post.text} 
                        options={{
                            highlight: (str, lang) => {
                                if (lang && hljs.getLanguage(lang)) {
                                    try {
                                        return hljs.highlight(lang, str).value;
                                    } catch (err) {}
                                }

                                try {
                                    return hljs.highlightAuto(str).value;
                                } catch (err) {}

                                return '';
                            }
                        }}
                    />
                </div>
            </div>

            <style jsx>{`
                .post--cover {
                    max-width: 100%;
                    min-width: 100%;
                    margin: 15px 0;
                }

            `}</style>
        </div>
)};

export default graphql(
    gql`
        mutation DeletePost($id: ID!) {
            deletePost(id: $id) {
                id
            }
        }
    `,
    {
        name: 'deletePost',
        props: ({deletePost, ownProps: {client}}) => ({
            deletePost: (event, id) => {
                event.preventDefault();
                event.stopPropagation();

                deletePost({
                    variables: {
                        id
                    }
                }).then(() => redirect({}, '/')).catch(error => console.log('error', error));
            }
        })
    }
)(PostView);