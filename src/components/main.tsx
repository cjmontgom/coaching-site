import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Wrapper} from "../styles/main.styles";
import Blog from "./blog";
import Home from "./home";
import Menu from "./menu";
import Header from './header'

const Main = () => (
  <Wrapper>
    <Router>
      <Header/>
      {/*<Menu/>*/}
      {/*<Switch>*/}
      {/*  <Route path="/blog">*/}
      {/*    <div>here</div>*/}
      {/*    <Blog />*/}
      {/*  </Route>*/}
      {/*  <Route path="/">*/}
      {/*    <Home/>*/}
      {/*  </Route>*/}
      {/*</Switch>*/}
      <Home/>
    </Router>
  </Wrapper>
);

export default Main;
