import styled from "styled-components";
import theme from "./theme";

interface BodyProps {
  welcomeText?: boolean;
}

interface QuotationProps {
  endQuote?: boolean;
}

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
  height: ${theme.sizes.desktop.marginTop};
  background: ${theme.colours.yellow};
`;

export const Section = styled.div`
  margin-top: ${theme.sizes.desktop.marginTop};
  max-width: ${theme.sizes.desktop.columnWidth};
  text-align: center;

  line-height: ${theme.bodyFont.lineHeight};
`;

export const SubHeader = styled.div`
  font-family: ${theme.subHeaderFont.family};
  font-size: ${theme.subHeaderFont.size};
  font-weight: ${theme.fontWeightBold};
  letter-spacing: ${theme.subHeaderFont.letterSpacing};
`;

export const Body = styled.div<BodyProps>`
  margin-top: 12px; 
  ${props => (props.welcomeText ? "margin-right: 9px;" : "")}
  
  font-family: ${theme.bodyFont.family};
  font-size: ${theme.bodyFont.size};
  font-weight: ${theme.fontWeightLight};
`;

export const WelcomeSection = styled(Section)`
  display: flex;
`;

export const WelcomeText = styled.div`
  text-align: right;
`;

export const Image = styled.img`
  margin: 0 20px 0 20px;
  max-width: 400px;
  box-shadow: 12px 10px 22px -5px #ccc;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${theme.sizes.desktop.marginTop};
  max-width: 1060px;
`;

export const ReviewQuotation = styled.img<QuotationProps>`
  ${props =>
    props.endQuote ? "align-self: flex-end;" : "align-self: flex-start;"}
  max-width: 50px;
  max-height: 50px;
`;

export const ReviewText = styled.div`
  margin: 26px;
  
  font-family: ${theme.bodyFont.family};
  font-size: ${theme.bodyFont.size};
  font-weight: ${theme.fontWeightBold};
  font-style: italic;
  color: ${theme.colours.orange};
  text-align: center;
  line-height: 1.4;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${theme.sizes.desktop.marginTop} 0 160px 0;
  padding: 50px;
  width: 50%;
  align-items: center;
  background: ${theme.colours.yellow};
  border-radius: ${theme.borderRadius};

  &:hover {
    box-shadow: ${theme.boxShadow.smallHover};
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 70%;
`;

export const TextInput = styled.input`
  margin-top: 4px;
  padding-left: 8px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;

  font-family: ${theme.formInputFont.family};
  font-size: ${theme.formInputFont.size};
  font-weight: ${theme.fontWeightLight};
`;

export const TextArea = styled.textarea`
  margin-top: 4px;
  padding-left: 8px;
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 10px;
  resize: none;

  font-family: ${theme.formInputFont.family};
  font-size: ${theme.formInputFont.size};
  font-weight: ${theme.fontWeightLight};
`;

export const Button = styled.button`
  align-self: center;
  margin: 30px 0 0 0;
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 25px;
  box-shadow: 8px 8px 16px -12px;

  font-family: ${theme.bodyFont.family};
  font-weight: ${theme.fontWeightReallyBold};
  font-size: 1.5em;
  color: black;
  
  &:hover {
    background: ${theme.colours.orange};
    color: white;
  }
`;
