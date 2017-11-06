import * as React from 'react';
import Link from 'next/link';

import Page from '../layouts/index';

export default () =>
    <Page title='главная'>
        <h1>Посты</h1>

        
            <h2><Link prefetch href='/post'><a>Some post</a></Link></h2>
        
        <p>TypeScript magic!</p>
    </Page>