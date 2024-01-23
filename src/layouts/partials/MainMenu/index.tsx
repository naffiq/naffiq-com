import * as React from "react";
import {
  HeaderMenu,
  HeaderMenuItem,
  HeaderMenuLink,
  HeaderMenuContainer,
  MenuButton
} from "./HeaderMenu";
import ResponsiveMenu from "./ResponsiveMenu";
import useMobileWidthEffect from "../../../hooks/useMobileWidthEffect";

const MainMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const isMobile = useMobileWidthEffect(isMobile => {
    if (!isMobile && showMobileMenu) {
      toggleMobileMenu();
    }
  });

  return (
    <HeaderMenuContainer>
      <MenuButton onClick={toggleMobileMenu}>Menu</MenuButton>
      <ResponsiveMenu
        isMobile={isMobile}
        showMobileMenu={showMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      >
        <HeaderMenu>
          <HeaderMenuItem>
            <HeaderMenuLink
              to="/"
              activeStyle={{
                fontWeight: 700
              }}
            >
              Home
            </HeaderMenuLink>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <HeaderMenuLink
              to="/about"
              activeStyle={{
                fontWeight: 700
              }}
            >
              About
            </HeaderMenuLink>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <HeaderMenuLink
              to="/blog"
              activeStyle={{
                fontWeight: 700
              }}
              partiallyActive
            >
              Blog
            </HeaderMenuLink>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <HeaderMenuLink
              to="/perne"
              activeStyle={{
                fontWeight: 700
              }}
              partiallyActive
            >
              Perne
            </HeaderMenuLink>
          </HeaderMenuItem>
        </HeaderMenu>
      </ResponsiveMenu>
    </HeaderMenuContainer>
  );
};

export default MainMenu;
