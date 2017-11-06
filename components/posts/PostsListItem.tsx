import * as React from 'react';
import Link from 'next/link';

export default ({post}) => {

    return (
        <article className="article-list--item">
            <div className="row article-list--item-cover-row">
                <div className="col-md-9 offset-md-3">

                    <Link prefetch href='/post'>
                        <a>
                            <img src="https://source.unsplash.com/featured/?code" alt="" 
                            className="article-list--item-cover"/>
                        </a>
                    </Link>
                    
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-3">
                    <span className="date">
                        29 августа
                    </span>
                </div>
                <div className="col-md-9">
                    <h3 className="article-list--item-title">
                        <Link prefetch href='/post'>
                        <a>Управление телеграм-каналом через PHP</a>
                        </Link>
                    </h3>

                    <p>
                        Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета.
                    </p>
                </div>
            </div>
            

            <style jsx>{`
                .article-list--item {
                    margin-bottom: 15px;
                }
                .article-list--item-cover-row {
                    margin-bottom: 15px;
                }

                .article-list--item-cover {
                    max-width: 100%;
                }
            `}</style>
        </article>
    )
}