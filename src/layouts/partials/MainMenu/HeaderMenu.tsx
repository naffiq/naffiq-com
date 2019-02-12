import styled from "styled-components";
import Link from "../../../components/Link";

export const MenuButton = styled.div`
  padding: 0 20px;
  color: #000;
  transition: color 0.3s;
  line-height: 100px;
  display: inline-block;
  cursor: pointer;
  font-weight: bold;

  @media (min-width: 767px) {
    display: none;
  }
`;

export const HeaderMenuContainer = styled.div`
  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
  }
`;

export const HeaderMenu = styled.ul`
  list-style: none;
  padding-left: 0;
  flex-direction: column;
  width: 100%;

  background-color: #fff;
  right: 0;

  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
    width: auto;
  }
`;

export const HeaderMenuItem = styled.li`
  margin-right: 20px;
`;

export const HeaderMenuLink = styled(Link)`
  padding: 0 20px;
  color: #000;
  transition: color 0.3s;
  line-height: 80px;
  font-size: 1.3em;
  display: inline-block;
  text-align: center;
  display: block;

  @media (min-width: 767px) {
    line-height: 100px;
    font-size: 1em;
    text-align: left;
    display: inline;
  }

  &:hover {
    color: #fc4275;
  }
`;
