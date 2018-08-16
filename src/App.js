import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

import AppRoute from "./components/AppRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AppRoute component={About} path="/about" />
          <AppRoute component={Blog} path="/blog" />
          <AppRoute component={Home} path="/demo/:slug" />
          <AppRoute component={Home} path="/" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
