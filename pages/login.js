import React from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import cookie from 'cookie';
import gql from 'graphql-tag';

import withData from '../lib/withData';
import redirect from '../lib/redirect';
import checkUserSession from '../lib/checkUserSession';
import Page from '../layouts/index';

class Login extends React.Component {
    static async getInitialProps(context, apolloClient) {
        const {userSession} = await checkUserSession(context, apolloClient);

        if (userSession.user) {
            redirect(context, '/');
        }

        return {};
    }

    render() {
        return (
            <Page title="Войти" description="Авторизация для управления сайтом">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Войти</h1>
                    </div>
                    <div className="col-md-4">
                        <form onSubmit={this.props.login}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Пароль</label>
                                <input type="password" name="password"/>
                            </div>

                            <button type="submit" className="login--button">
                                Войти
                            </button>
                        </form>
                    </div>
                </div>
                <style jsx>{`
                    .form-group {}

                    .form-group label {
                        display: block;
                        font-weight: bold;
                    }

                    .form-group input {
                        border: none;
                        outline: none;
                        border-bottom: 1px solid #000;
                        padding: 4px;
                    }

                    .login--button {
                        border: none;
                        background-color: #000;
                        color: #fff;
                        padding: 4px 16px;
                    }
                `}</style>
            </Page>
        );
    }
}

export default compose(
    withData, 
    withApollo,
    graphql(
        gql`
            mutation Login($email: String!, $password: String!) {
                signinUser(email: {email: $email, password: $password}) {
                    token
                }
            }
        `,
        {
            name: 'loginWithEmail',
            props: ({
                loginWithEmail,
                ownProps: {client}
            }) => ({
                login: (event) => {
                    const data = new FormData(event.target);

                    event.preventDefault();
                    event.stopPropagation();

                    loginWithEmail({
                        variables: {
                            email: data.get('email'),
                            password: data.get('password')
                        }
                    }).then(({data: {signinUser: {token}}}) => {
                        document.cookie = cookie.serialize('token', token, {
                            maxAge: 30 * 24 * 60 * 60
                        });

                        client.resetStore().then(() => {
                            redirect({}, '/');
                        });
                    }).catch(error => console.log('error', error));
                }
            })
        }
    )
)(Login);