import styled from "styled-components";
import {DeviceSizes} from "../types";
import {Section} from "../main.styles";

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
  max-width: 320px;
  max-height: 480px;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    margin-top: 20px;
    max-width: 80%;
  }
`;


