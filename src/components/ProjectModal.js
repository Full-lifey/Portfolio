import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import gitHub from "../assets/img/GitHub-Mark-32px.png";

const ProjectModal = props => {
  return (
    <MDBContainer>
      <MDBModal
        isOpen={props.showModal}
        toggle={() => props.toggleModal()}
        fullHeight
        position="right"
      >
        <MDBModalHeader toggle={() => props.toggleModal()}>
          {props.project.title}
        </MDBModalHeader>
        <MDBModalBody>
          <img
            className={`project-img`}
            src={props.project.imageURL}
            alt={props.project.title}
          />
          {props.project.description}
        </MDBModalBody>
        <MDBModalFooter>
          <div className="modal-footer-left">
            {props.project.demo && <MDBBtn color="red">Demo</MDBBtn>}
            <MDBBtn href={props.project.deployment} color="info">
              Deployment
            </MDBBtn>
            <a
              className="repo"
              href={props.project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="Repository" />
            </a>
          </div>
          <div className="modal-footer-right">
            <MDBBtn color="secondary" onClick={() => props.toggleModal()}>
              Close
            </MDBBtn>
          </div>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ProjectModal;
