import * as React from 'react';

import Meta from '../components/base/Meta';
import Header from '../components/base/Header';



export default ({title, activeLink, children, description, imageUrl}) => (
    <div className="container">
        <Meta title={title} description={description} imageUrl={imageUrl}/>
        <Header activeLink={activeLink}/>
        {children}
    </div>
);