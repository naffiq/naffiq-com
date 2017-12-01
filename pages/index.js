import React from 'react';
import Link from 'next/link';
import cookie from 'cookie';
import {compose, withApollo} from 'react-apollo';

import withData from '../lib/withData';

import redirect from '../lib/redirect';
import checkUserSession from '../lib/checkUserSession';
import Page from '../layouts/index';
import PostsList from '../components/posts/PostsList';

class Index extends React.Component {
    static async getInitialProps(context, apolloClient) {
        const {userSession} = await checkUserSession(context, apolloClient);

        return {
            user: userSession ? userSession.user : null
        };
    }

    logout = () => {
console.log('ok, logout');

        document.cookie = cookie.serialize('token', '', {
            maxAge: -1
        });

        this.props.client.resetStore().then(() => {
            redirect({}, '/');
        });
    };

    render() {
        const {user} = this.props;

        const _renderAdminMenu = () => {
            if (user) {
                return (
                    <div>
                        <ul className="side-menu">
                            <li>
                                <Link href="post-create">
                                    <a>Добавить пост</a>
                                </Link>
                            </li>
                            <li>
                                <a onClick={this.logout}>Выйти</a>
                            </li>
                        </ul>
                        <style jsx>{`
                            .side-menu {
                                list-style: none;
                                padding-left: 0;
                            }
                            .side-menu li {
                                margin: 10px 0;
                            }
                            .side-menu li a {
                                color: #000;
                            }
                            .side-menu li a:hover {
                                text-decoration: underline;
                                cursor: pointer;
                            }
                        `}</style>
                    </div>
                )
            }
        };

        return (
            <Page title='главная' activeLink='home' description='I <3 JavaScript' imageUrl='https://source.unsplash.com/ICW6QYOcdlg/800x600'>
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="page--title">Посты</h1>
                        {_renderAdminMenu()}
                    </div>

                    
                    <div className="col-md-8">
                        <PostsList/>
                    </div>
                </div>
            </Page>
        );
    }
}

export default compose(withData, withApollo)(Index);