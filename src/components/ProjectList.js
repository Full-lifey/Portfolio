import React, { useState, useEffect } from "react";

import { sampleData } from "../assets/sample_data";

import gitHub from "../assets/img/GitHub-Mark-32px.png";

function ProjectList(props) {
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    setprojects(sampleData);
  }, []);

  if (!projects) {
    return <h2>Loading Projects...</h2>;
  } else {
    return (
      <div className='projects'>
        {projects.map((project, index) => {
          return (
            <div className={`project-item`} key={index}>
              <img
                className={`project-img ${index % 2 === 0 ? "left" : ""}`}
                src={project.image}
                alt={project.title}
              />
              <div className='project-text'>
                <h2 className='project-title'>{project.title}</h2>
                <p className='project-description'>{project.description}</p>
                <a
                  className='deployment-btn'
                  href={project.deployment}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Deployment
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
          );
        })}
      </div>
    );
  }
}

export default ProjectList;
