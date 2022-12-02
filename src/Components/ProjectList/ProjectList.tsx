import { useState, useEffect } from "react";
// import axios from "axios";

import ProjectData from "../../assets/sampleData/projects.json";
import ProjectListItem from "./ProjectListItem/ProjectListItem";
// import ProjectModal from "./ProjectModal";

import "./ProjectList.scss";

export type Project = {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  deployment: string;
  repo: string;
  preview: string;
};

function ProjectList() {
  // state for projects
  const [projects, setProjects] = useState<Project[]>([]);
  const [clickedProject, setClickedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // axios
    //   .get("https://joel-perez-portfolio-be.herokuapp.com/api/projects")
    //   .then(res => {
    //     setProjects(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    setProjects(ProjectData);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (!projects) {
    return <h2>Loading Projects...</h2>;
  } else {
    return (
      <div className="projects-list-wrapper">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              onClick={async () => {
                setClickedProject(project);
                toggleModal();
              }}
            >
              <ProjectListItem project={project} />
            </div>
          );
        })}
        {/* <ProjectModal
          project={clickedProject}
          showModal={showModal}
          toggleModal={toggleModal}
        /> */}
      </div>
    );
  }
}

export default ProjectList;
