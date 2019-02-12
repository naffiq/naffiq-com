import styled from "styled-components";

const ProjectCard = styled.div`
  z-index: 1;
  position: relative;
  padding: 25px 40px;
  background-color: #fff;

  @media (min-width: 1024px) {
    min-width: 450px;
    top: -58px;
    left: -40px;
  }
`;

export const ProjectCardHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 800;
`;

export const ProjectCardBody = styled.p`
  font-family: "PlayFair Display";
  margin-top: 10px;
  font-size: 22px;
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
