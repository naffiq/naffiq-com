import React, {Component} from 'react';

import withData from '../lib/withData';
import Page from '../layouts';

class PostCreate extends Component {
    render() {
        return (
            <Page title="Добавить пост">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Добавить пост</h1>
                    </div>
                    <div className="col-md-8">
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                        }}>
                            
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

export default withData(PostCreate);