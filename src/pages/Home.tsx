import React from "react";
import Cover from "../cover/Cover";
import GetInTouch from "../footer/GetInTouch";
import LayoutNavbar from "../navbar/LayoutNavbar";
import ProjectCover from "../projects/ProjectCover";

type Props = {};

function Home({}: Props) {
  return (
    <LayoutNavbar>
      <div className="container max-w-full">
        <Cover />
        <ProjectCover />
        <GetInTouch />
      </div>
    </LayoutNavbar>
  );
}

export default Home;
