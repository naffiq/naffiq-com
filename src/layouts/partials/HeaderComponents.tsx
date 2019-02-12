import styled from "styled-components";
import Link from "../../components/Link";
import Container from "../../components/Container";

export const HeaderWrapper = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 32px;
  background-color: #ffffff;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: ${props => (props.narrow ? "800px" : "1200px")};
  }
`;

export const AvatarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fc4275;
  margin-right: 100px;
  font-weight: 700;
`;

export const AvatarImg = styled.img`
  margin-right: 20px;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

export const HeaderMenuItem = styled.li`
  margin-right: 20px;
`;

export const HeaderMenuLink = styled(Link)`
  padding: 0 20px;
  color: #000;
  transition: color 0.3s;
  line-height: 100px;
  display: inline-block;

  &:hover {
    color: #fc4275;
  }
`;
