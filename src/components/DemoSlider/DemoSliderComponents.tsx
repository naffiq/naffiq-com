import styled from "styled-components";
import Link from "../Link";
import Container from "../Container";

export const DemoIFrame = styled.iframe`
  width: 100%;
  height: calc(100% - 180px);
  border: none;
`;

export const DemoLink = styled.a``;

export const DemoFooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SliderControls = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  @media (min-width: 1024px) {
    flex-direction: row;
    width: auto;
  }
`;

export const SliderLink = styled.a<{ disabled?: boolean }>`
  line-height: 40px;
  font-size: 14px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  color: ${props => (props.disabled ? "#e1e1e1" : "#fc4275")};

  font-weight: 800;
  padding: 0 16px;

  :last-of-type {
    text-align: right;
  }

  @media (min-width: 1024px) {
    line-height: 180px;
    font-size: 24px;

    :last-of-type {
      margin-left: 40px;
    }
  }
`;
