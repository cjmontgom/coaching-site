import styled from "styled-components";
import { Section } from "../main.styles";
import { DeviceSizes } from "../types";
import theme from "../theme";

interface QuotationProps {
  endQuote?: boolean;
}

export const ReviewWrapper = styled(Section)`
  display: flex;
  max-width: 860px;
  flex-direction: column;

  @media only screen and (min-width: ${DeviceSizes.laptop}) {
    flex-direction: row;
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
  line-height: ${theme.bodyFont.lineHeight};

  @media only screen and (max-width: ${DeviceSizes.ipad}) {
    font-size: 0.8em;
  }
`;
