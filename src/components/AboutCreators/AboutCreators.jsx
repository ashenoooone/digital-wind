import React from "react";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import Instruction from "./Instruction/Instruction";
import Creators from "./Creators/Creators";

function AboutCreators() {
  return (
    <div style={{ flex: "1" }}>
      <ProjectInfo />
      <Instruction />
      <Creators />
    </div>
  );
}

export default AboutCreators;
