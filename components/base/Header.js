import React from 'react';
import Link from 'next/link';

export default ({activeLink}) => {
    return (
        <header className="site-header row justify-content-between no-gutters">
            <span className="title">
                Галымжан Абдугалимов
            </span>

            <ul className="main-menu">
                <li className="main-menu--link-item">
                    <Link href="/">
                        <a className={`main-menu--link${activeLink === 'home' ? ' active' : ''}`}>Посты</a>
                    </Link>
                </li>
                <li className="main-menu--link-item">
                    <Link href="/about">
                        <a className={`main-menu--link${activeLink === 'about' ? ' active' : ''}`}>Обо мне</a>
                    </Link>
                </li>
                <li className="main-menu--link-item">
                    <Link href="https://github.com/naffiq">
                        <a className={`main-menu--link`} target='_blank'>GitHub: naffiq</a>
                    </Link>
                </li>
            </ul>

            {/*language=CSS*/}
            <style jsx>{`
                .site-header {
                    margin: 30px 0;
                }

                .main-menu {
                    list-style: none;
                    padding-left: 0;
                }

                .main-menu--link-item {
                    display: inline-block;
                    margin-left: 30px;
                }

                .main-menu--link {
                    color: #3B69E9;
                }
                .main-menu--link:hover, .main-menu--link.active {
                    color: #212121;
                    text-decoration: none;
                    padding-bottom: 3px;
                    border-bottom: #3B69E9 1px solid;
                }
            `}</style>
        </header>
    );
}