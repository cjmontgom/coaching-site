import React, {Fragment} from "react";
import logo from "../images/logo.png";
import {Heading, HeaderColourBlock, HeaderWrapper, Logo} from "../styles/header.styles";

const Header = () => (
  <Fragment>
    <Logo src={logo} alt="logo" />
    <HeaderWrapper>
      <Heading>MONTASHERY COACHING</Heading>
      <HeaderColourBlock />
    </HeaderWrapper>
  </Fragment>
);

export default Header;
