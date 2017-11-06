import * as React from 'react';
import Link from 'next/link';

import withData from '../lib/withData';

import Page from '../layouts/index';
import PostsList from '../components/posts/PostsList';

export default withData((props) =>
    <Page title='обо мне' activeLink='about' imageUrl='https://source.unsplash.com/ICW6QYOcdlg/800x600' description='Разработчик, музыкант, прокрастинатор.'>
        <div className="row">
            <div className="col-md-4">
                <h1 className="page--title">Обо мне</h1>
            </div>

            
            <div className="col-md-8">
                <p>
                    Занимался back end разработкой для веба на PHP с 2012 года. 
                    В 2017 году перешел на JavaScript и full stack с React/Next.js (никогда ведь не поздно 😉).
                </p>
                <p>
                    И это замечательно 🎉
                </p>
                <p>
                    В свободное время пишу код, музыку, рисую в 3D, изучаю курсы на Udemy 
                    и пишу в этот блог.
                </p>

                <p>
                    Доступен по email <a href="mailto:">me@naffiq.com</a>
                </p>
            </div>
        </div>
    </Page>
);