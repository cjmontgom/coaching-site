import styled from "styled-components";
import theme from "../theme";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colours.primaryNeutral};
`;

export const HeaderWrapper = styled.div`
position: relative;
  width: 100%;
  margin-top: 76px;
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 300px;
`;

export const Header = styled.div`
  font-family: ${theme.headerFont.family};
  font-size: ${theme.headerFont.size};
  color: ${theme.colours.seventiesDarkBrown};
  letter-spacing: 0.05em;
  text-align: center;

  position: absolute;
  left: 50%;
  margin-left: -5.5em; 
  top: -50px;
`;
export const HeaderColourBlock = styled.div`
  width: 100%;
  height: 100px;
  background: ${theme.colours.secondaryNeutral};

  border-style: solid none solid none;
  border-color: white;
  border-width: thick;
`;

export const SubHeader = styled.div`
  font-family: ${theme.subHeaderFont.family};
  font-size: ${theme.subHeaderFont.size};
  color: ${theme.colours.seventiesDarkBrown};
`;

export const Body = styled.div`
  font-family: ${theme.bodyFont.family};
  font-weight: ${theme.fontWeightLight};
  text-align: center;
  line-height: 1.8;
`;

export const Section = styled.div`
  margin: 100px auto 100px auto;
  max-width: 500px;
`;

export const FormWrapper = styled.div`
  display: inline-block;
  padding: 50px;
  max-width: 500px;
  background: ${theme.colours.secondaryNeutral};
  border-radius: ${theme.borderRadius};

  &:hover {
    box-shadow: ${theme.boxShadow.smallHover};
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const FormSection = styled.div`
  margin: 20px auto 20px auto;
  max-width: 500px;
`;

export const Button = styled.div`
  font-family: ${theme.bodyFont};
  font-weight: 600;
  font-size: 1.5em;
  color: ${theme.colours.primaryNeutral};

  margin: auto;
  padding: 10px;
  background: ${theme.colours.seventiesYellowSecondary};
  max-width: 100px;
  border-radius: 300px;

  &:hover {
    background: ${theme.colours.seventiesPink};
    transition: background 0.2s ease-in-out;
  }
`;
