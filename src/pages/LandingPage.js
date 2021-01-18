import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import mobile from 'is-mobile'
import  About from "./About";
import mainImage from "../content/AboutData/homepageImg.png";
import "../components/Navbar/style.css"

export default class LandingPage extends Component {
  // mainImage = mobile() ? <img alt="Lloyd Barnes" className="photo" src="../content/AboutData/homepageImg.png" />
  //   : <img alt="Lloyd Barnes" className="photo" src="../content/AboutData/homepageImg.png" />
  render() {
    return (
      <Link to="/about" href={About}>
      <section id="intro" className="container waves-effect waves-light">
        <div className="container ">
          
        <h1>Welcome, I'm Lloyd!</h1>
        </div>
        <h3 className="h3">Software Engineer, Web Developer and Gamer</h3>
        <div className="container">
      <img className="photo" id="photo" src={mainImage} alt="homepage" />
      </div>
      
      </section>
      </Link>
    )
  }
}