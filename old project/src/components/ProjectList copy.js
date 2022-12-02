import React, { useState, useEffect } from "react";
// import { sampleData } from "../assets/sample_data";
import axios from "axios";

import Project from "./Project.js";
import ProjectModal from "./ProjectModal";

import "./ProjectList.scss";

function ProjectList(props) {
  // state for projects
  const [projects, setProjects] = useState([]);
  const [clickedProject, setClickedProject] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://joel-perez-portfolio-be.herokuapp.com/api/projects")
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (!projects) {
    return <h2>Loading Projects...</h2>;
  } else {
    return (
      <div className="projects-list-wrapper">
        {projects.map((project, index) => {
          return (
            <div
              key={project.id}
              onClick={async () => {
                await setClickedProject(project);
                toggleModal(project);
              }}
            >
              <Project project={project} index={index} key={project.title} />
            </div>
          );
        })}
        <ProjectModal
          project={clickedProject}
          showModal={showModal}
          toggleModal={toggleModal}
        />
      </div>
    );
  }
}

export default ProjectList;
