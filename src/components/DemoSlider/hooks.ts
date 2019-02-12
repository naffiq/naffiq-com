import { useState } from "react";
import projects from "./projects";

export const useProjectSlider = () => {
  const [projectIdx, setProjectIdx] = useState(0);
  const project = projects[projectIdx];
  const hasNextSlide = projectIdx < projects.length - 1;
  const hasPrevSlide = projectIdx > 0;
  const onNextSlideClick = () => {
    if (hasNextSlide) {
      setProjectIdx(projectIdx + 1);
    }
  };
  const onPrevSlideClick = () => {
    if (hasPrevSlide) {
      setProjectIdx(projectIdx - 1);
    }
  };

  return {
    project,
    hasNextSlide,
    hasPrevSlide,
    onNextSlideClick,
    onPrevSlideClick
  };
};
