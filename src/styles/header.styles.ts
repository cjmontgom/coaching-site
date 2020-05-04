import styled from "styled-components";
import theme from "./theme";
import {DeviceSizes} from "./types";

export const HeaderWrapper = styled.div`
  position: relative;
  margin-top: 60px;
  width: 100%;
  text-align: center;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    margin-top: 2em;
  }
`;

export const Logo = styled.img`
  max-width: 300px;
  margin-top: 40px;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    margin-top: 2em;
    max-width: 40%;
  }
`;

export const Heading = styled.div`
  position: relative;
  padding-left: 2%;
  z-index: 1;

  font-family: ${theme.headerFont.family};
  font-size: ${theme.headerFont.size};
  font-weight: ${theme.headerFont.weight};
  color: ${theme.colours.orange};
  letter-spacing: 0.5em;

  @media only screen and (max-width: ${DeviceSizes.laptop}) {
    font-size: 1.8em;
    letter-spacing: 0.3em;
  }
 
`;

export const HeaderColourBlock = styled.div`
  position: relative;
  margin-top: -1.4em;
  width: 100%;
  height: ${theme.sizes.desktop.marginTop};
  background: ${theme.colours.yellow};

  @media only screen and (max-width: ${DeviceSizes.laptop}) {
    margin-top: -0.95em;
    height: 100px;
  }
`;