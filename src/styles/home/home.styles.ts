import styled from "styled-components";
import {DeviceSizes} from "../types";
import {Section} from "../main.styles";

export const MobileLogo = styled.img`
  height: 110px;
  width: 150px;
  margin: 16px auto;

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    display: none;
  }
`;

export const WelcomeSection = styled(Section)`
  display: flex;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    flex-direction: column;
    align-items: center;
    margin: 1em 1em 0 1em;
  }
`;

export const WelcomeText = styled.div`
  text-align: right;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    text-align: center;
  }
`;

export const WelcomeImage = styled.img`
  margin: 0 20px 0 20px;
  max-width: 320px;
  max-height: 480px;

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    margin-top: 20px;
    max-width: 80%;
    max-height: 40%;
  }
`;
