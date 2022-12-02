import { useInView } from "react-intersection-observer";

import styles from "./HoverFx.module.scss";
import { Project } from "../ProjectList";

type ProjectProps = {
  project: Project;
};

export default function ProjectListItem({ project }: ProjectProps) {
  const [ref, inView] = useInView({ threshold: 0 });
  // const [textRef, textInView] = useInView({ threshold: 0 });

  if (!project) {
    return <h2>Loading Project</h2>;
  } else {
    return (
      <div
        className={`project-item ${
          inView ? styles.popoverHover : styles.popoverHoverOut
        }`}
        ref={ref}
      >
        <div
          className={`project-img-wrapper ${
            project.id % 2 === 1 ? "right" : ""
          }`}
        >
          <img
            className={`project-img`}
            src={project.imageURL}
            alt={project.title}
          />
        </div>
        <div className="project-text">
          <h2 className="project-title">{project.title}</h2>
          <div className="project-description">
            {project.preview.split("\n").map((p, key) => {
              return <p key={key}>{p}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
