import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.scss";

import { ApolloProvider } from "react-apollo";

import AppRoute from "./components/AppRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import LoginPage from "./pages/Login";
import AuthSuccess from "./pages/Auth/Success";
import SecureRoute from "./components/SecureRoute";
import BlogComposePage from "./pages/BlogCompose";

import { apolloClient } from "./config";

class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Switch>
            <AppRoute component={About} path="/about" />
            <SecureRoute component={BlogComposePage} path="/blog/new" />
            <AppRoute component={BlogPost} path="/blog/:slug" />
            <AppRoute component={Blog} path="/blog" />
            <AppRoute component={Home} path="/demo/:slug" />
            <AppRoute component={LoginPage} path="/login" />
            <AppRoute component={Home} path="/" exact />
            <AppRoute component={AuthSuccess} path="/auth/success/:jwt" />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
