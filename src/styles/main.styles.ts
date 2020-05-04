import styled from "styled-components";
import {DeviceSizes} from "./types";
import theme from "./theme";

interface BodyProps {
    welcomeText?: boolean;
    centered?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${DeviceSizes.phone}) {
    width: 100%;
  }
`;

export const Section = styled.div`
  margin-top: ${theme.sizes.desktop.marginTop};
  max-width: ${theme.sizes.desktop.columnWidth};
  text-align: center;

  line-height: ${theme.bodyFont.lineHeight};

  @media only screen and (max-width: ${DeviceSizes.laptop}) {
    margin: 6em 1em 0 1em;
  }
`;

export const SubHeader = styled.div`
  font-family: ${theme.subHeaderFont.family};
  font-size: ${theme.subHeaderFont.size};
  font-weight: ${theme.fontWeightBold};
  letter-spacing: ${theme.subHeaderFont.letterSpacing};

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    font-size: 1.2em;
    letter-spacing: 0.15em;
  }
`;

export const Body = styled.div<BodyProps>`
  margin-top: 12px; 
  ${props => (props.welcomeText ? "margin-right: 9px;" : "")}
  ${props => (props.centered ? "text-align: center;" : "")}

  font-family: ${theme.bodyFont.family};
  font-size: ${theme.bodyFont.size};
  font-weight: ${theme.fontWeightLight};
  
  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    font-size: 1em;
  }
`;