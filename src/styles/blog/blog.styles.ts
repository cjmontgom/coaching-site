import styled from "styled-components";
import { Body } from "../main.styles";
import { DeviceSizes } from "../types";
import theme from "../theme";

export const BlogWrapper = styled.div`
  max-width: 350px;
  margin: 0 auto;
  line-height: ${theme.bodyFont.lineHeight};

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    max-width: 600px;
    margin-top: 60px;
  }

  @media only screen and (min-width: ${DeviceSizes.laptop}) {
    max-width: 700px;
  }
`;

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

export const SmallerBlogImage = styled(BlogImage)`
  width: 100%;
  height: 50%;
}
`;

export const BlogParagraph = styled.div`
  margin-top: 50px;
  text-align: left;
`;

export const SubHeader = styled.div`
  padding-top: 70px;
  font-weight: ${theme.fontWeightReallyBold};
`;

export const Citation = styled(Body)`
  font-size: 0.6em !important;
`;

export const Quote = styled.div`
  margin: 12px 0 12px 0;
  font-style: italic;
`;

export const PageBreak = styled.hr`
  margin: 20px 0 20px 0;
`;
