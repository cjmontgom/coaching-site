import styled from "styled-components";
import { DeviceSizes } from "./types";
import theme from "./theme";

interface BodyProps {
  welcomeText?: boolean;
  centered?: boolean;
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    margin-top: 25px;
    top: 320px;
    position: absolute;
  }
`;

export const Section = styled.div`
  margin-top: ${theme.sizes.desktop.marginTop};
  max-width: ${theme.sizes.desktop.columnWidth};
  text-align: center;
  align-self: center;

  line-height: ${theme.bodyFont.lineHeight};

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    margin: 4em 1em 0 1em;
  }
`;

export const SubHeader = styled.div`
  font-family: ${theme.subHeaderFont.family};
  font-size: ${theme.subHeaderFont.size};
  font-weight: ${theme.fontWeightBold};
  letter-spacing: ${theme.subHeaderFont.letterSpacing};

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    font-size: 1em;
    letter-spacing: 0.2em;
  }
`;

export const Body = styled.div<BodyProps>`
  margin-top: 12px; 
  ${props => (props.welcomeText ? "margin-right: 9px;" : "")}
  ${props => (props.centered ? "text-align: center;" : "")}

  font-family: ${theme.bodyFont.family};
  font-size: 0.8em;
  font-weight: ${theme.fontWeightLight};
  
  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    font-size: ${theme.bodyFont.size};
  }
`;
