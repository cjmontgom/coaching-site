import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Wrapper} from "../styles/main.styles";
import Home from "./home";
import TopBar from "./topbar";
import MobileTopBar from "./mobileTopbar";
import BlogContents from "./blog";

const Main = () => (
  <Wrapper>
    <Router>
      <TopBar/>
      <MobileTopBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/blog">
          <BlogContents />
        </Route>
      </Switch>
    </Router>
  </Wrapper>
);

export default Main;
