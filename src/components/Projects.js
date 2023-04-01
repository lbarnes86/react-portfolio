import React, { Component } from "react";
import '../css/resume.min.css';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects &amp; Git Repositories</h2>
          <ul className="fa-ul mb-0">
            {this.projects.map((data, index) => (
              <li key={index}>
                <p>
                  <a href={data.projectLive} target="_blank" rel="noreferrer"> {data.projectName} </a>
                </p>
                <p>{data.projectDescription}</p>
                <a href={data.projectRepo} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid img-profile rounded-circle mx-auto mb-2 col-6"
                    src={data.projectImage}
                    alt=""
                  ></img>
                </a>
                <p>
                  <br></br>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Projects;