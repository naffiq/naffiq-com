import * as React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  AvatarLink,
  AvatarImg,
  HeaderMenu,
  HeaderMenuItem,
  HeaderMenuLink
} from "./HeaderComponents";

const avatarSrc = require("./assets/avatar.png");

const AppHeader = () => {
  // const pathname = "main";
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <AvatarLink className="header-avatar" to="/">
          <AvatarImg
            src={avatarSrc}
            className="header-avatar-image"
            alt="Galymzhan Abdugalimov"
          />
          @naffiq
        </AvatarLink>

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
            >
              Blog
            </HeaderMenuLink>
          </HeaderMenuItem>
          {/* <HeaderMenuItem>
            <HeaderMenuLink to="/projects">Projects</HeaderMenuLink>
          </HeaderMenuItem> */}
        </HeaderMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default AppHeader;
