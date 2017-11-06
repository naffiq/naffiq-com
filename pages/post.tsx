import * as React from 'react';
import Link from 'next/link';

import Page from '../layouts/index';

export default () => 
    <Page title='Some post'>
        <h1>Some post</h1>
        <p>TypeScript magic!</p>

        <Link prefetch href='/'><a>&lt; Back to homepage</a></Link>
    </Page>