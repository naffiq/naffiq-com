import * as React from 'react';
import Link from 'next/link';

import withData from '../lib/withData';

import Page from '../layouts/index';
import PostsList from '../components/posts/PostsList';

export default withData((props) =>
    <Page title='главная' activeLink='home'>
        <div className="row">
            <div className="col-md-4">
                <h1 className="page--title">Посты</h1>
            </div>

            
            <div className="col-md-8">
                <PostsList/>
            </div>
        </div>
    </Page>
);