import React from 'react';
import Head from 'next/head';

export default ({title, description, imageUrl}) =>
    <div>
        <Head>
            <title>Галымжан Абдугалимов — {title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

            <link href="//fonts.googleapis.com/css?family=PT+Mono&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet"/>
            <link href="//fonts.googleapis.com/css?family=PT+Mono|PT+Sans+Caption:400,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet"/>
            <link href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css" rel="stylesheet"/>
            <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"/>

            <meta name="description" content={description}/>
            <meta name="og:description" content={description}/>
            <meta name="og:title" content={`Галымжан Абдугалимов — ${title}`}/>
            <meta name="og:image" content={imageUrl}/>
        </Head>
        <style jsx global>{`
            html, body {
                margin: 0;
                height: 100%
            }

            h1, h2, h3, h4, h5, h6 {
                font-family: 'PT Mono', monospace;                
            }
            h1 {
                font-weight: bold;
            }

            * {
                font-family: 'PT Sans Caption', sans-serif;                
            }

            .page--title {
                font-size: 48px;
            }
            
            pre {
                background-color: #eee;
                padding: 15px;
                border-radius: 3px;
                border: 1px solid #DDD;
            }
        `}</style>
    </div>