import * as React from 'react';

import Page from '../layouts/index';

export default () => 
    <Page title='Some post' activeLink='home'>
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-9">
                <h1 className="post--title">Управление телеграм-каналом через PHP</h1>

                <img className="post--cover" src="https://source.unsplash.com/800x600/?code" alt=""/>

                <div className="post--text">
                    <p>
                    Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета.
                    </p>
                </div>
            </div>
        </div>

        <style jsx>{`
            .post--cover {
                max-width: 100%;
                min-width: 100%;
                margin: 15px 0;
            }

        `}</style>
    </Page>