import styled from "styled-components";
import {Body, Section} from "./main.styles";
import {DeviceSizes} from "./types";

export const BlogImage = styled.img`
  margin-top: 40px;
  width: 500px;
  height: 250px;
  align-self: center;

  @media only screen and (max-width: ${DeviceSizes.laptop}) {
    width: 340px;
    height: 170px;
  }
`;

export const BlogParagraph = styled.div`
  margin-top: 50px;
`;

export const Citation = styled(Body)`
  font-size: 0.6em !important;
`;

export const Quote = styled.div`
  margin: 12px 0 12px 0;
  font-style: italic;
  font-weight: 500;
`;

export const PageBreak = styled.hr`
  margin: 20px 0 20px 0;
`;

export const BlogSection = styled(Section)`
  max-width: 350px;

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    max-width: 600px;
  }
  
  @media only screen and (min-width: ${DeviceSizes.laptop}) {
    max-width: 700px;
  }
`;
