import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.scss";

import AppRoute from "./components/AppRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AppRoute component={About} path="/about" />
          <AppRoute component={Blog} path="/blog" />
          <AppRoute component={BlogPost} path="/blog/:slug" />
          <AppRoute component={Home} path="/demo/:slug" />
          <AppRoute component={Home} path="/" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
