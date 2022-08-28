import React from "react";
import InCover from "../cover/InCover";
import LayoutNavbar from "../navbar/LayoutNavbar";

type Props = {};

function About({}: Props) {
  return (
    <LayoutNavbar>
      <div className="container max-w-full">
        <InCover />
      </div>
    </LayoutNavbar>
  );
}

export default About;
