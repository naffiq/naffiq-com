import styled from "styled-components";
import Link from "../Link";
import Container from "../Container";

export const DemoIFrame = styled.iframe`
  width: 100%;
  height: calc(100% - 200px);
  border: none;

  @media (min-width: 1024px) {
    height: calc(100% - 180px);
  }
`;

export const DemoLink = styled.a``;

export const DemoFooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SliderControls = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px 0;
  width: 100%;
  flex-direction: row;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const SliderLink = styled.a<{ disabled?: boolean }>`
  line-height: 40px;
  font-size: 16px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  color: ${props => (props.disabled ? "#e1e1e1" : "#fc4275")};

  font-weight: 800;
  padding: 0 16px;

  :last-of-type {
    text-align: right;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    line-height: 80px;
    font-size: 24px;
  }

  @media (min-width: 1200px) {
    line-height: 180px;
    font-size: 24px;

    :last-of-type {
      margin-left: 40px;
    }
  }
`;
