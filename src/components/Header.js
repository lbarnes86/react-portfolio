import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Resume from '../files/LBarnes_Resume.pdf';
import '../css/resume.min.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.headerData = props.headerData;
  }
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="home"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {this.headerData.firstName}
            <span className="text-primary">{this.headerData.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {/* {this.headerData.phoneNumber} · */}
            <a href="mailto:name@email.com">{this.headerData.email}</a>
          </div>
          <p className="lead mb-5">{this.headerData.bio}</p>
          <li>
          {/* <p>Resume</p> */}
          Resume
            <a href={Resume} target="_blank" rel="noreferrer">
              browser
            </a>
            <a href={Resume} download="Lloyd Barnes">
              download
            </a>
            {/* <a href={this.headerData.resume} download="Lloyd Barnes">
              download
            </a> */}
          </li>
          {/* <li>
            <a href={this.headerData.resume} download="Lloyd Barnes">
              download
            </a>
          </li> */}
          <br />
          <br />
          <div className="social-icons">
            <a href={this.headerData.linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.headerData.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;