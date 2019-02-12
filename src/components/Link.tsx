import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

export const Link = styled(GatsbyLink)<{ color?: string }>`
  color: ${props => props.color || "#fc4275"};
  text-decoration: none;
`;

export const A = styled.a<{ color?: string }>`
  color: ${props => props.color || "#fc4275"};
  text-decoration: none;
`;

export default Link;
