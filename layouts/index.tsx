import * as React from 'react';

import Meta from '../components/base/Meta';
import Header from '../components/base/Header';



export default ({title, activeLink, children}) => (
    <div className="container">
        <Meta title={title}/>
        <Header activeLink={activeLink}/>
        {children}
    </div>
);