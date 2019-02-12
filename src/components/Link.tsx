import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export const Link = styled(GatsbyLink)<{ color?: string }>`
  color: ${props => props.color || "#fc4275"};
  text-decoration: none;
`;

export const A = styled(OutboundLink)<{ color?: string }>`
  color: ${props => props.color || "#fc4275"};
  text-decoration: none;
`;

export default Link;
