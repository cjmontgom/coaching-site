import styled from "styled-components";
import theme from "./theme";
import {Link} from "react-router-dom";
import {DeviceSizes} from "./types";

interface MenuProps {
  visible: boolean;
}

interface SpacerProps {
  large: boolean;
}

interface ItemWrapperProps {
  centerItem?: boolean;
}

export const MobileTopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${theme.colours.yellow};

  @media only screen and (min-width: ${DeviceSizes.ipad}) {
    display: none;
  }
`;

export const VisibleWrapper = styled.div`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: space-around;
`;

export const TopBarItemWrapper = styled.div<ItemWrapperProps>`
  ${props =>
    props.centerItem ? "justify-content: center; flex: 6;" : "flex: 1;"}

  display: flex;
`;

export const MobileHeader = styled.div`
  text-align: center;
  font-family: ${theme.headerFont.family};
  font-weight: ${theme.headerFont.weight};
  color: ${theme.colours.orange};
  font-size: 0.8em;
  letter-spacing: 0.3em;
`;

export const HamburgerMenu = styled.img`
  height: 40px;
  width: 40px;
  margin-left: auto;
  margin-right: 10px;
`;

export const MenuItemsWrapper = styled.div<MenuProps>`
  display: ${props => (props.visible ? "flex;" : "none;")}

  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55px;
  padding: 6px;
`;

export const MobileLink = styled(Link)`
  padding: 6px;
  font-family: ${theme.subHeaderFont.family};
  font-weight: ${theme.fontWeightBold};
  text-decoration: none;
  color: white;
`;

export const Spacer = styled.div<SpacerProps>`
  height: ${props => (props.large ? "114px;" : "55px;")};
`;
