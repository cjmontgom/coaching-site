import React, {useEffect, useRef, useState} from "react";
import {
  DesktopTopBar,
  Heading,
  LinkWrapper,
  Logo,
  StyledLink,
  TopBarLogoWrapper,
  TopBarTextWrapper
} from "../styles/topBar.styles";
import logo from "../images/logo.png";

const TopBar = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [parentWidth, setParentWidth] = useState<number>(0);
  const topBarWrapper = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const distanceFromTop = topBarWrapper.current.getBoundingClientRect().bottom;
    distanceFromTop <= -260 ? setIsFixed(true) : setIsFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const width = topBarWrapper.current.parentElement.getBoundingClientRect().width;
    setParentWidth(width);
  }, []);

  return (
    <DesktopTopBar ref={topBarWrapper} width={parentWidth}>
      <TopBarLogoWrapper >
        <Logo src={logo} alt="logo" />
      </TopBarLogoWrapper>
      <TopBarTextWrapper fixed={isFixed} width={parentWidth}>
        <LinkWrapper>
          <StyledLink to="/">HOME</StyledLink>
        </LinkWrapper>
        <Heading>MONTASHERY COACHING</Heading>
        <LinkWrapper>
          <StyledLink to="/blog">BLOG</StyledLink>
        </LinkWrapper>
      </TopBarTextWrapper>
    </DesktopTopBar>
  );
};

export default TopBar;
