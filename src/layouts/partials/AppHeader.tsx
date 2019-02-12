import * as React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  AvatarLink,
  AvatarImg
} from "./HeaderComponents";
import MainMenu from "./MainMenu";

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

        <MainMenu />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default AppHeader;
