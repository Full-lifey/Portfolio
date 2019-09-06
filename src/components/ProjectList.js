import React, { useState, useEffect } from "react";
// import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import Project from "./Project.js";

import { sampleData } from "../assets/sample_data";

import "./ProjectList.scss";

function ProjectList(props) {
  // state for projects
  const [projects, setprojects] = useState([]);

  // ref for component in view
  const [ref, inView] = useInView({ threshold: 0 });
  const [textRef, textInView] = useInView({ threshold: 0 });

  useEffect(() => {
    setprojects(sampleData);
  }, []);

  // const fadeIn = useSpring({
  //   config: { duration: 1000 },
  //   opacity: 1,
  //   from: { opacity: 0 }
  // });

  if (!projects) {
    return <h2>Loading Projects...</h2>;
  } else {
    return (
      <div className='projects-list-wrapper'>
        {projects.map((project, index) => {
          return <Project project={project} index={index} />;
        })}
      </div>
    );
  }
}

export default ProjectList;
