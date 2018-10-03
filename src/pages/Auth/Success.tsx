import * as React from "react";
import { Redirect, match } from "react-router-dom";
import authHelper from "../../helpers/authHelper";

interface Props {
  match: match<{
    jwt: string;
  }>;
}

interface State {
  isJwtSaved: boolean;
}

class SuccessAuth extends React.PureComponent<Props, State> {
  state = {
    isJwtSaved: false
  };

  componentDidMount() {
    const { match } = this.props;
    if (match.params.jwt) {
      authHelper.authenticate(match.params.jwt, () =>
        this.setState({ isJwtSaved: true })
      );
    }
  }

  render() {
    const { isJwtSaved } = this.state;
    if (isJwtSaved) {
      return <Redirect to="/" />;
    }

    return "...";
  }
}

export default SuccessAuth;

//
