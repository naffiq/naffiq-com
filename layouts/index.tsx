import * as React from 'react';

import Meta from '../components/base/Meta';



export default ({title, children}) => (
    <div>
        <Meta title={title}/>
        {children}
    </div>
);