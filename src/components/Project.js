import React from "react";
import { useInView } from "react-intersection-observer";

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
          <div className="project-description">
            {props.project.preview.split("\n").map((p, key) => {
              return <p key={key}>{p}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
