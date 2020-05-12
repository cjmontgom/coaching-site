import styled from "styled-components";
import theme from "./theme";
import { DeviceSizes } from "./types";
import { Link } from "react-router-dom";

interface TopBarTextWrapperProps {
  fixed?: boolean;
  width: number;
}

interface TopBarProps {
  width: number;
}

export const DesktopTopBar = styled.div<TopBarProps>`
  width: ${props => `${props.width}px`};
  display: none;

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    display: block;
  }
`;

export const TopBarLogoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    height: 260px;
  }
`;

export const TopBarTextWrapper = styled.div<TopBarTextWrapperProps>`
  position: absolute;
  top: 140px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  width: ${props => `${props.width}px`};
  height: 60px;
  background: ${theme.colours.yellow};
  justify-content: center;

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    ${props =>
      props.fixed
        ? "position: fixed; top: 0px;"
        : "position: absolute; top: 260px;"};
  }
`;

export const LinkWrapper = styled.div`
  display: none;

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  margin: 0 20px 0 20px;
  font-family: ${theme.subHeaderFont.family};
  font-size: ${theme.subHeaderFont.size};
  font-weight: ${theme.fontWeightLight};
  letter-spacing: ${theme.subHeaderFont.letterSpacing};
  text-decoration: none;
  color: white;
`;

export const Logo = styled.img`
  align-self: center;
  max-width: 300px;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    max-width: 40%;
  }
`;

export const Heading = styled.div`
  align-self: center;
  text-align: center;
  font-family: ${theme.headerFont.family};
  font-weight: ${theme.headerFont.weight};
  color: ${theme.colours.orange};
  font-size: 1em;
  letter-spacing: 0.3em;

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    font-size: 1.3em;
    letter-spacing: 0.4em;
    flex: 4;
  }  
  
  @media only screen and (min-width: 1122px) {
    font-size: ${theme.headerFont.size};
    letter-spacing: 0.5em;
    flex: 3;
  }
`;
