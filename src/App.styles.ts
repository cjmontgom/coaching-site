import styled from "styled-components";
import theme from "./theme";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  margin-top: 90px;
  width: 100%;
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 300px;
  margin-top: 40px;
`;

export const Header = styled.div`
  position: relative;
  z-index: 1;

  font-family: ${theme.headerFont.family};
  font-size: ${theme.headerFont.size};
  font-weight: ${theme.headerFont.weight};
  color: ${theme.colours.orange};
  letter-spacing: 0.5em;
`;

export const HeaderColourBlock = styled.div`
  position: relative;
  margin-top: -30px;
  width: 100%;
  height: ${theme.sizes.desktop.marginTop};;
  background: ${theme.colours.yellow};
`;

export const Section = styled.div`
  margin-top: ${theme.sizes.desktop.marginTop};
  max-width: ${theme.sizes.desktop.columnWidth};
  text-align: center;
  line-height: 1.4;
`;

export const WelcomeSection = styled(Section)`
  display: flex;
  text-align: right;
`;

export const WelcomeText = styled.div``;

export const Image = styled.img`
  max-width: 400px;
  padding: 0 20px;
`;

export const SubHeader = styled.div`
  font-family: ${theme.subHeaderFont.family};
  font-size: ${theme.subHeaderFont.size};
  font-weight: ${theme.fontWeightBold};
  color: black;
  letter-spacing: 0.3em;
`;

interface BodyProps {
  welcomeText?: boolean;
}

export const Body = styled.div<BodyProps>`
  font-family: ${theme.bodyFont.family};
  font-weight: ${theme.fontWeightLight};
  font-size: ${theme.bodyFont.size};
  margin: ${props => (props.welcomeText ? "12px 9px 2px 0;" : "12px 0 2px 0;")};
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1060px;
  margin-top: ${theme.sizes.desktop.marginTop};
`;

interface QuotationProps {
  endQuote?: boolean;
}

export const ReviewQuotation = styled.img<QuotationProps>`
  max-width: 50px;
  max-height: 50px;

  ${props =>
    props.endQuote ? "align-self: flex-end;" : "align-self: flex-start;"}
`;

export const ReviewText = styled.div`
  text-align: center;
  font-family: ${theme.bodyFont.family};
  font-weight: ${theme.fontWeightBold};
  font-size: ${theme.bodyFont.size};
  font-style: italic;
  color: ${theme.colours.orange};
  margin: 26px;
  line-height: 1.4;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${theme.sizes.desktop.marginTop} 0 200px 0;
  padding: 50px;
  width: 50%;
  background: ${theme.colours.yellow};
  border-radius: ${theme.borderRadius};
  align-items: center;

  &:hover {
    box-shadow: ${theme.boxShadow.smallHover};
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;

  font-family: inherit;
  margin: 20px auto 0 auto;
  width: 70%;
`;

export const TextInput = styled.input`
  background: white;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding: 0 0 0 8px;

  font-family: ${theme.bodyFont.family};
  font-weight: ${theme.fontWeightLight};
  font-size: 1.1em;
`;

export const TextArea = styled.textarea`
  background: white;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: none;
  padding: 0 0 0 8px;
  resize: none;

  font-family: ${theme.bodyFont.family};
  font-weight: ${theme.fontWeightLight};
  font-size: 1.1em;
`;

export const Button = styled.button`
  font-family: ${theme.bodyFont.family};
  font-weight: 600;
  font-size: 1.5em;
  color: black;
  text-align: center;
  align-self: center;

  margin: 30px 0 0 0;
  padding: 10px;
  background: white;
  width: 100px;
  border-radius: 300px;
  border: none;

  &:hover {
    background: ${theme.colours.orange};
    color: white;
    transition: background color 0.2s ease-in-out;
  }
`;
