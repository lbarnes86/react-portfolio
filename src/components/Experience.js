import React, { Component } from "react";
import '../css/resume.min.css';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {this.experience.map((exp, index) => (
            <div
              key={index}
              className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
            >
              <div className="resume-content">
                <h3 className="mb-0">{exp.position}</h3>
                <div className="subheading mb-3">{exp.organization}</div>
                <p>{exp.aboutWork}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Experience;