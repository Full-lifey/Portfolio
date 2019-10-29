import React from "react";
// Material UI Components
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import WebIcon from "@material-ui/icons/Web";
import GitHubIcon from "@material-ui/icons/GitHub";
import CloseIcon from "@material-ui/icons/Close";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// MDBootstrap Components
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBTooltip
} from "mdbreact";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: "#6ec6ff",
      main: "#2196f3",
      // dark: "#0069c0",
      contrastText: "#fff"
    },
    secondary: {
      // light: "#ff7961",
      main: "#00c853",
      // dark: "#ba000d",
      contrastText: "#000"
    },
    error: {
      main: "#f44336"
    }
  }
});

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
          {props.project.description &&
            props.project.description.split("\n").map((p, key) => {
              return <p key={key}>{p}</p>;
            })}
        </MDBModalBody>
        <MDBModalFooter>
          <ThemeProvider theme={theme}>
            <div className="modal-footer-left">
              {props.project.demo && (
                <MDBTooltip placement="top">
                  <IconButton
                    color="primary"
                    href={props.project.demo}
                    aria-label="demo"
                  >
                    <PlayArrowIcon fontSize="large" />
                  </IconButton>
                  <div>Go To Demo</div>
                </MDBTooltip>
              )}
              <MDBTooltip placement="top">
                <IconButton
                  href={props.project.deployment}
                  aria-label="deployment"
                  color="secondary"
                >
                  <WebIcon fontSize="large" />
                </IconButton>
                <div>Go To App</div>
              </MDBTooltip>
              <MDBTooltip placement="top">
                <IconButton
                  href={props.project.repo}
                  aria-label="github"
                  color="inherit"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <div>Go To Code</div>
              </MDBTooltip>
            </div>
            <div className="modal-footer-right">
              <MDBTooltip placement="top">
                <IconButton
                  onClick={() => props.toggleModal()}
                  aria-label="close"
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
                <div>Close</div>
              </MDBTooltip>
            </div>
          </ThemeProvider>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ProjectModal;
