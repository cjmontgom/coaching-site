import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Wrapper} from "../styles/main.styles";
import Blog from "./blog";
import Home from "./home";
import TopBar from "./topbar";
import MobileTopBar from "./mobileTopbar";

const Main = () => (
  <Wrapper>
    <Router>
      <TopBar/>
      <MobileTopBar/>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  </Wrapper>
);

export default Main;
