import React, { useState, useEffect } from "react";
import { sampleData } from "../assets/sample_data";

import Project from "./Project.js";

import "./ProjectList.scss";

function ProjectList(props) {
  // state for projects
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    setprojects(sampleData);
  }, []);

  if (!projects) {
    return <h2>Loading Projects...</h2>;
  } else {
    return (
      <div className='projects-list-wrapper'>
        {projects.map((project, index) => {
          return (
            <Project project={project} index={index} key={project.title} />
          );
        })}
      </div>
    );
  }
}

export default ProjectList;
