import * as React from "react";
import styled from "styled-components";

interface Props {
  isMobile: boolean;
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
  children: JSX.Element;
}

const ResponsiveMenu = ({
  isMobile,
  showMobileMenu,
  children,
  toggleMobileMenu
}: Props) => {
  if (isMobile) {
    return (
      <MobileMenuContainer show={showMobileMenu}>
        <MobileBackdrop show={showMobileMenu} onClick={toggleMobileMenu} />

        <MobileSideMenu style={showMobileMenu ? { right: 0 } : {}}>
          <CloseMenu onClick={toggleMobileMenu}>&times;</CloseMenu>
          {children}
        </MobileSideMenu>
      </MobileMenuContainer>
    );
  }

  return children;
};

const MobileMenuContainer = styled.div<{ show: boolean }>`
  position: relative;
  visibility: ${props => (props.show ? "visible" : "hidden")};
  transition: visibility 0.3s ease-in-out;
`;

const MobileBackdrop = styled.div<{ show: boolean }>`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  background-color: #fc4275;
  opacity: ${props => (props.show ? 0.8 : 0)};
  z-index: 20;
  transition: opacity 0.3s ease-in-out;
`;

const MobileSideMenu = styled.div<{}>`
  position: fixed;
  width: 80%;
  right: -80%;
  top: 0;
  height: 100%;
  background-color: #fff;
  z-index: 21;
  display: flex;
  flex-direction: column;

  transition: right 0.3s ease-in-out;
`;

const CloseMenu = styled.div`
  width: 80px;
  height: 80px;
  align-self: flex-end;
  line-height: 80px;
  font-size: 48px;
  text-align: center;
  color: #fc4275;
  font-weight: bold;
`;

export default React.memo(ResponsiveMenu);
