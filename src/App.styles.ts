import styled from "styled-components";
import theme from "./theme";

interface BodyProps {
  welcomeText?: boolean;
}

interface QuotationProps {
  endQuote?: boolean;
}

const DeviceSizes = {
  phone: "600px",
  ipad: "767px",
  laptop: "1024px",
  desktop: "1200px",
  largeDesktop: "1800px"
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${DeviceSizes.phone}) {
    width: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  margin-top: 90px;
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

export const Header = styled.div`
  position: relative;
  z-index: 1;

  font-family: ${theme.headerFont.family};
  font-size: ${theme.headerFont.size};
  font-weight: ${theme.headerFont.weight};
  color: ${theme.colours.orange};
  letter-spacing: 0.5em;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    font-size: 1.8em;
    letter-spacing: 0.3em;
  }
`;

export const HeaderColourBlock = styled.div`
  position: relative;
  margin-top: -1.9em;
  width: 100%;
  height: ${theme.sizes.desktop.marginTop};
  background: ${theme.colours.yellow};

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    margin-top: -0.95em;
    height: 100px;
  }
`;

export const Section = styled.div`
  margin-top: ${theme.sizes.desktop.marginTop};
  max-width: ${theme.sizes.desktop.columnWidth};
  text-align: center;

  line-height: ${theme.bodyFont.lineHeight};

  @media only screen and (max-width: ${DeviceSizes.laptop}) {
    margin: 4em 1em 0 1em;
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
  
  font-family: ${theme.bodyFont.family};
  font-size: ${theme.bodyFont.size};
  font-weight: ${theme.fontWeightLight};
  
  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    font-size: 1em;
  }
`;

export const WelcomeSection = styled(Section)`
  display: flex;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WelcomeText = styled.div`
  text-align: right;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    text-align: center;
  }
`;

export const Image = styled.img`
  margin: 0 20px 0 20px;
  max-width: 400px;
  box-shadow: 12px 10px 22px -5px #ccc;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    margin-top: 20px;
    max-width: 80%;
  }
`;

export const ReviewWrapper = styled(Section)`
  display: flex;
  max-width: 1060px;

  @media only screen and (max-width: 1260px) {
    flex-direction: column;
    max-width: 90%;
  }
`;

export const ReviewQuotation = styled.img<QuotationProps>`
  ${props =>
    props.endQuote ? "align-self: flex-end;" : "align-self: flex-start;"}
  max-width: 2.5em;
  max-height: 2.5em;
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

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    font-size: 1em;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${theme.sizes.desktop.marginTop} 0 160px 0;
  padding: 50px;
  width: 40%;
  align-items: center;
  background: ${theme.colours.yellow};
  border-radius: ${theme.borderRadius};

  &:hover {
    box-shadow: ${theme.boxShadow.smallHover};
    transition: box-shadow 0.2s ease-in-out;
  }

  @media only screen and (max-width: ${DeviceSizes.laptop}) {
    margin: 6em 0 2em 0;
    width: 70%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 80%;

  @media only screen and (max-width: ${DeviceSizes.laptop}) {
    width: 100%;
  }
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
  background: white;

  font-family: ${theme.bodyFont.family};
  font-weight: ${theme.fontWeightReallyBold};
  font-size: 1.5em;
  color: black;

  &:hover {
    background: ${theme.colours.orange};
    color: white;
  }
`;

/* Small devices (portrait tablets and large phones, 600px and up) */

/* Medium devices (landscape tablets, 768px and up) */

/* Large devices (laptops/desktops, 992px and up) */

/* Extra large devices (large laptops and desktops, 1200px and up) */

/* Extra EXTRA large devices (large desktops, 1800px and up) */

// @media only screen and (max-width: 600px) {
//   font-size: 14px;
// }
// @media only screen and (min-width: 768px) {
//   font-size: 30px;
// }
// @media only screen and (min-width: 992px) {
//   font-size: 40px;
// }
// @media only screen and (min-width: 1200px) {
//   font-size: 52px;
// }
// @media only screen and (min-width: 1800px) {
//   font-size: 64px;
// }