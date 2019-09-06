import React, { useState, useEffect } from "react";
// import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import { sampleData } from "../assets/sample_data";
import gitHub from "../assets/img/GitHub-Mark-32px.png";

import styles from "./HoverFx.module.scss";
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
      <div className='projects'>
        {projects.map((project, index) => {
          return (
            <div
              className={`project-item`}
              key={index}
              // ref={ref}
            >
              <div
                className={`project-img-wrapper ${
                  index % 2 === 1 ? "right" : ""
                }`}
              >
                <img
                  className={`project-img`}
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className='project-text'>
                <h2 className='project-title'>{project.title}</h2>
                <p className='project-description'>{project.description}</p>
                <div className='project-actions'>
                  <a
                    className='deployment-btn'
                    href={project.deployment}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Check it Out
                  </a>
                  <a
                    className='repo'
                    href={project.repo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={gitHub} alt='Repository' />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProjectList;
