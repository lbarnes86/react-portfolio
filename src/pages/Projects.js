import React, { Component } from 'react'
import ProjectItem from '../components/CardProject';
import ProjectContents from '../content/ProjectData'
import "../components/CardProject/style.css"

export default class Projects extends Component {

  ProjectItems = ProjectContents.map(ProjectContent => {
    return <ProjectItem key={ProjectContent.name} ProjectContent={ProjectContent} />
  })

  render() {
    return (
      <section id="projects" className="section scrollspy">
        <h3 className="intro subtitle">Projects</h3>
        <div className="container">
          <div className="row">
            {this.ProjectItems}
          </div>
        </div>
      </section>
    )
  }
}
