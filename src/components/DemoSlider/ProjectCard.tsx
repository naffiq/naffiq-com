import styled from "styled-components";

const ProjectCard = styled.div`
  z-index: 1;
  position: relative;
  background-color: #fff;
  padding: 16px;
  width: calc(100% - 32px);

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 50%;
  }

  @media (min-width: 1024px) {
    padding: 25px 40px;
    width: auto;

    min-width: 450px;
    top: -58px;
    left: -40px;
  }
`;

export const ProjectCardHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const ProjectCardBody = styled.p`
  font-family: "PlayFair Display";
  margin-top: 10px;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const ProjectCardMenu = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
`;

export const ProjectCardMenuItem = styled.li`
  margin-right: 15px;
`;

export default ProjectCard;
