import styled from "styled-components";
import theme from "./theme";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 115px;
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 300px;
  margin-top: 40px;
`;

export const Header = styled.div`
  font-family: ${theme.headerFont.family};
  font-size: ${theme.headerFont.size};
  font-weight: ${theme.headerFont.weight};
  color: ${theme.colours.orange};
  letter-spacing: 0.05em;
  text-align: center;

  position: absolute;
  left: 36%;
  margin-left: -5.5em;
  top: -36px;
`;

export const HeaderColourBlock = styled.div`
  width: 100%;
  height: 160px;
  background: ${theme.colours.yellow};
`;

export const Section = styled.div`
  margin: 160px auto 0 auto;
  max-width: ${theme.sizes.desktop.columnWidth};
  text-align: center;
  line-height: 1.8;
`;

export const WelcomeSection = styled(Section)`
  display: flex;
  text-align: right;
`;

export const Image = styled.img`
  max-width: 400px;
  padding: 0 20px;
`;

export const SubHeader = styled.div`
  font-family: ${theme.subHeaderFont.family};
  font-size: ${theme.subHeaderFont.size};
  font-weight: ${theme.fontWeightBold};
  color: black;
`;

export const NormalTextBlock = styled.div`
  font-family: ${theme.bodyFont.family};
  font-weight: ${theme.fontWeightLight};
  font-size: ${theme.bodyFont.size};
`;

export const Span = styled.span`
  padding-left: 1em;
`;

export const PageBreakImageWrapper = styled.div`
  display: flex;
  width: 800px;
`;

export const PageBreakImage = styled.img`
  max-width: 400px;
`;

export const FormWrapper = styled.div`
  display: inline-block;
  margin: 0 auto 200px auto;
  padding: 50px;
  max-width: ${theme.sizes.desktop.columnWidth};
  background: ${theme.colours.yellow};
  border-radius: ${theme.borderRadius};

  &:hover {
    box-shadow: ${theme.boxShadow.smallHover};
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const FormSection = styled.form`
  font-family: inherit;
  margin: 20px auto 20px auto;
  max-width: 500px;
`;

export const FormInput = styled.input`
  background: white;
  width: 100%;
  height: 40px;
  border-radius: 300px;
`;

export const Button = styled.div`
  font-family: ${theme.bodyFont.family};
  font-weight: 600;
  font-size: 1.5em;
  color: black;
  text-align: center;

  margin: auto;
  padding: 10px;
  background: white;
  max-width: 100px;
  border-radius: 300px;

  &:hover {
    background: ${theme.colours.pink};
    color: white;
    transition: background color 0.2s ease-in-out;
  }
`;
