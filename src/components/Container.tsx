import styled from "styled-components";

export const Container = styled.div<{ narrow?: boolean }>`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1280px) {
    width: ${props => (props.narrow ? "800px" : "1200px")};
  }
`;

export const ContainerContent = styled.div`
  padding: 0 32px;
  display: block;
  width: calc(100% - 64px);
`;

export default Container;
