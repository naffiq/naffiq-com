import React from 'react';
import Link from 'next/link';

import moment from 'moment';

moment.locale('ru-RU')

export default ({post}) => {

    const postLink = {pathname: '/post', query: {slug: post.slug}};

    return (
        <article className="article-list--item">
            <div className="row article-list--item-cover-row">
                <div className="col-md-9 offset-md-3">

                    <Link prefetch href={postLink} as={`/post/${post.slug}`}>
                        <a>
                            <img src={post.imageUrl} alt="" 
                            className="article-list--item-cover"/>
                        </a>
                    </Link>
                    
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-3">
                    <span className="date">
                        {moment(post.createdAt).format('MMMM d')}
                    </span>
                </div>
                <div className="col-md-9">
                    <h3 className="article-list--item-title">
                        <Link prefetch href={postLink} as={`/post/${post.slug}`}>
                            <a>{post.title}</a>
                        </Link>
                    </h3>

                    <p>
                        {post.description}
                    </p>
                </div>
            </div>
            

            <style jsx>{`
                .article-list--item {
                    margin-bottom: 15px;
                }
                .article-list--item-cover-row {
                    margin-bottom: 15px;
                }

                .article-list--item-cover {
                    max-width: 100%;
                }
            `}</style>
        </article>
    )
}