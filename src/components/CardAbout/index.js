import React from "react";
import "./style.css";
import Resume from "../../content/AboutData/cv.pdf";
import Pic from "../../content/AboutData/myImg.png";
import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();

function About() {
  return (
    <section>
      <div>
        <h3 className="intro subtitle">About Me</h3>

        <p className="text">
          My name is Lloyd Barnes and I live in Dallas, Texas. I grew up
          learning HVAC and electrical work with my father. I enjoy gaming,
          music, and traveling in my free time. I am a dog dad to an English
          Bulldog named Deebo. I also have a pet scorpion named Drake.
          <br></br>
          <br></br>I have an undergraduate and masters degrees from Jackson
          State University. I started my career as a cable, telephone, and
          internet technician with AT&amp;T before becoming a technical support
          advisor with Apple. My experience and degree in technology education
          gave me the qualifications to become a technical support advisor
          today.
          <br></br>
          <br></br>
          My goal is to land a career in gaming and/or mobile app development. I
          am willing to relocate and work remotely.
        </p>
      </div>
      <div className="container">
        <img className="photo" id="photo" src={Pic} alt="myphoto" />

        <br></br>
        <br></br>
        <a id="resume" href={Resume} download>
          <i className="fa fa-file"></i> Download Resume
        </a>
      </div>
    </section>
  );
}

export default About;
