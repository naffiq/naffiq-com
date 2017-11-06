import * as React from 'react';
import * as moment from 'moment';

moment.locale('ru-RU')

export default ({post}) => (
<div className="row">
    <div className="col-md-3 text-right">
        <span>{moment(post.createdAt).format('MMMM d')}</span>
    </div>
    <div className="col-md-9">
        <h1 className="post--title">{post.title}</h1>

        <img className="post--cover" src={post.imageUrl} alt=""/>

        <div className="post--text">
            <p dangerouslySetInnerHTML={{__html: post.text}} />
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
);