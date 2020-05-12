import React, {Fragment, useState} from "react";
import menu from "../images/menu.png";
import {
    HamburgerMenu,
    MenuItemsWrapper,
    MobileHeader,
    MobileLink,
    MobileTopBarWrapper,
    Spacer,
    TopBarItemWrapper,
    VisibleWrapper
} from "../styles/mobileTopbar.styles";

const MobileTopBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [shiftPageContent, setshiftPageContent] = useState<boolean>(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setshiftPageContent(!shiftPageContent);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    setshiftPageContent(false);
  };

  return (
    <Fragment>
      <MobileTopBarWrapper>
        <VisibleWrapper>
          <TopBarItemWrapper />
          <TopBarItemWrapper centerItem={true}>
            <MobileLink to="/" onClick={handleLinkClick}>
              <MobileHeader>MONTASHERY COACHING</MobileHeader>
            </MobileLink>
          </TopBarItemWrapper>
          <TopBarItemWrapper>
            <HamburgerMenu src={menu} alt="logo" onClick={handleMenuClick} />
          </TopBarItemWrapper>
        </VisibleWrapper>
        <MenuItemsWrapper visible={showMenu}>
          <MobileLink to="/" onClick={handleLinkClick}>
            HOME
          </MobileLink>
          <MobileLink to="/blog" onClick={handleLinkClick}>
            BLOG
          </MobileLink>
        </MenuItemsWrapper>
      </MobileTopBarWrapper>
      <Spacer large={shiftPageContent} />
    </Fragment>
  );
};

export default MobileTopBar;
