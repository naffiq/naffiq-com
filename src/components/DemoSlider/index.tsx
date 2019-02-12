import * as React from "react";
import projects from "./projects";
import {
  DemoIFrame,
  SliderControls,
  SliderLink,
  DemoFooterContainer
} from "./DemoSliderComponents";
import DemoContainer from "./Container";
import ProjectCard, {
  ProjectCardHeader,
  ProjectCardBody,
  ProjectCardMenu,
  ProjectCardMenuItem
} from "./ProjectCard";
import { A } from "../Link";
import { useProjectSlider } from "./hooks";

const DemoSlider = () => {
  const {
    project,
    hasNextSlide,
    hasPrevSlide,
    onNextSlideClick,
    onPrevSlideClick
  } = useProjectSlider();

  return (
    <DemoContainer>
      <DemoIFrame src={project.iframeUrl} title={project.title} />

      <div>
        <DemoFooterContainer>
          <ProjectCard>
            <ProjectCardHeader>{project.title}</ProjectCardHeader>
            <ProjectCardBody>{project.description}</ProjectCardBody>

            <ProjectCardMenu>
              {project.links.map((link, idx) => (
                <ProjectCardMenuItem key={idx}>
                  <A target="_blank" rel="noopener noreferrer" href={link.url}>
                    {link.label}
                  </A>
                </ProjectCardMenuItem>
              ))}
            </ProjectCardMenu>
          </ProjectCard>

          <SliderControls>
            <SliderLink disabled={!hasPrevSlide} onClick={onPrevSlideClick}>
              ← previous
            </SliderLink>

            <SliderLink disabled={!hasNextSlide} onClick={onNextSlideClick}>
              next →
            </SliderLink>
          </SliderControls>
        </DemoFooterContainer>
      </div>
    </DemoContainer>
  );
};

export default DemoSlider;
