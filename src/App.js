import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import profileData from './profileData.json';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerData: profileData.header,
      skills: profileData.skills,
      experience: profileData.experience,
      education: profileData.education,
      projects: profileData.projects,
    };
  }
render() {
  return (
    <div className="App">
    <Navbar navbarData={this.state.headerData} />
    <div className="container-fluid p-0">
      <Header headerData={this.state.headerData} />
      <hr className="m-0" />
      <Skills skills={this.state.skills} />
      <hr className="m-0" />
      <Experience experience={this.state.experience} />
      <hr className="m-0" />
      <Education education={this.state.education} />
      <hr className="m-0" />
      <Projects projects={this.state.projects} />
    </div>
  </div>
  );
}
}
export default App;
