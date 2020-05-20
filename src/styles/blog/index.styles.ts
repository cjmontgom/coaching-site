import styled from "styled-components";
import {Link} from "react-router-dom";
import theme from "../theme";
import {BodyWrapper} from "../main.styles";

export const BlogContentsWrapper = styled(BodyWrapper)`
  width: 100%;
  margin-top: 40px;
  flex-direction: column;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;

export const BlogCard = styled(Link)`
  margin: 25px;
  flex: 1 1;
  display: flex;
  flex-direction: column;

  text-align: center;
  font-family: ${theme.subHeaderFont.family};
  font-weight: ${theme.fontWeightBold};
  text-decoration: none;
  color: black;
`;

// instead of this, create a flex table that populates in 3s automatically...

export const PlaceHolderCard = styled.div`
  flex: 1 1;
  margin: 25px;
`;

export const TemplateWrapper = styled.div`
  margin: auto;
`;
