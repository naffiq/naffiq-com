import * as React from 'react';
import Head from 'next/head';

interface PropTypes {
    title: string
};

export default ({title}: PropTypes) =>
    <div>
        <Head>
            <title>Галымжан Абдугалимов — {title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

            <link href="https://fonts.googleapis.com/css?family=PT+Mono&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=PT+Mono|PT+Sans+Caption:400,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet"/>
        </Head>
        <style jsx global>{`
            html, body {
                margin: 0;
                height: 100%
            }

            h1, h2, h3, h4, h5, h6 {
                font-family: 'PT Mono', monospace;                
            }

            * {
                font-family: 'PT Sans Caption', sans-serif;                
            }
        `}</style>
    </div>