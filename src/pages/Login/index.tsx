import * as React from "react";

class LoginPage extends React.Component {
  render() {
    const { OAUTH_URL } = process.env;
    console.log(OAUTH_URL);

    return (
      <div className="container narrow">
        <h1>Login using Github account</h1>
        <a href={OAUTH_URL}> Proceed to login </a>
      </div>
    );
  }
}

export default LoginPage;
