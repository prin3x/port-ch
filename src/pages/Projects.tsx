import React from "react";
import LayoutNavbar from "../navbar/LayoutNavbar";
import ProjectList from "../projects/ProjectList";

type Props = {};

function Projects({}: Props) {
  return (
    <LayoutNavbar>
      <div className="container max-w-full custom-container overflow-hidden">
          <ProjectList/>
      </div>
    </LayoutNavbar>
  );
}

export default Projects;
