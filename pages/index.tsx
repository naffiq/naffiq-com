import * as React from 'react';
import Link from 'next/link';

import Page from '../layouts/index';
import PostsList from '../components/posts/PostsList';

export default () =>
    <Page title='главная'>
        <div className="row">
            <div className="col-md-4">
                <h1 className="page--title">Посты</h1>
            </div>

            
            <div className="col-md-8">
                <PostsList/>
            </div>
        </div>
    </Page>