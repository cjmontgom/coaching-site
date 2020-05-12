import styled from "styled-components";
import theme from "../theme";
import { DeviceSizes } from "../types";

export const FormWrapper = styled.div`
  align-self: center;

  display: flex;
  flex-direction: column;
  margin: 6em 0 2em 0;
  padding: 10%;
  width: 70%;
  align-items: center;
  background: ${theme.colours.yellow};
  border-radius: ${theme.borderRadius};

  &:hover {
    box-shadow: ${theme.boxShadow.smallHover};
    transition: box-shadow 0.2s ease-in-out;
  }

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    margin: 6em 0 2em 0;
    padding: 10%;
    width: 60%;
  }

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    margin: ${theme.sizes.desktop.marginTop} 0 160px 0;
    padding: 50px;
    width: ${theme.sizes.desktop.columnWidth};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 90%;

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

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    height: 1.6em;
    font-size: 1em;
  }
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

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    height: 3.6em;
    font-size: 1em;
  }
`;

export const Button = styled.button`
  align-self: center;
  margin: 30px 0 0 0;
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 25px;
  background: white;

  font-family: ${theme.bodyFont.family};
  font-weight: ${theme.fontWeightReallyBold};
  font-size: 1.1em;
  color: black;

  &:hover {
    background: ${theme.colours.orange};
    color: white;
  }

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    font-size: 1em;
  }
`;
