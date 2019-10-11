import React from "react";
import { useInView } from "react-intersection-observer";

import gitHub from "../assets/img/GitHub-Mark-32px.png";
import styles from "./HoverFx.module.scss";

function Project(props) {
  const [ref, inView] = useInView({ threshold: 0 });
  // const [textRef, textInView] = useInView({ threshold: 0 });

  if (!props.project) {
    return <h2>Loading Project</h2>;
  } else {
    return (
      <div
        className={`project-item ${
          inView ? styles.popoverHover : styles.popoverHoverOut
        }`}
        key={props.index}
        ref={ref}
      >
        <div
          className={`project-img-wrapper ${
            props.index % 2 === 1 ? "right" : ""
          }`}
        >
          <img
            className={`project-img`}
            src={props.project.imageURL}
            alt={props.project.title}
          />
        </div>
        <div className="project-text">
          <h2 className="project-title">{props.project.title}</h2>
          <p className="project-description">{props.project.description}</p>
          <div className="project-actions">
            <a
              className="deployment-btn"
              href={props.project.deployment}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check it Out
            </a>
            <a
              className="repo"
              href={props.project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="Repository" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
