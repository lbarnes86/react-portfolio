import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";
import Resume from "../../content/AboutData/cv.pdf";
import Project from "../../pages/Projects";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

function Navbar() {
	return (
        <>
		<nav className="topnav" id="myTopnav">

		<NavLink className="nav-bar mdi-action-account-box small" to="/about" href={About}>
				About
			</NavLink>
			
			
			<NavLink className="nav-bar mdi-av-web" to="/project" href={Project}>
				Projects
			</NavLink>

			<NavLink className="nav-bar mdi-content-mail" to="/contact" href={Contact}>
				Contact
			</NavLink>

			<a className=" nav-bar mdi-action-description" href={Resume} target="_blank" rel="noreferrer">
				Resumé
			</a>

        
			
		</nav>
</>
);
}

export default Navbar;
		// <div>
       
     //   <ul className="nav">
            
         
            
             
        //       <Link className="about"
        //         aria-label="Navigate to the About section"
        //         to="/about"
        //         className="nav-link"
        //       >
        //         <i className="mdi-action-account-box small" />
        //         About
        //       </Link>
            

        //     <li className="projects">
        //       <Link
        //         aria-label="Navigate to the Projects section"
        //         to="/projects"
        //         className="nav-link"
        //       >
        //         <i className="mdi-av-web small" />
        //         <span>Projects</span>
        //       </Link>
        //     </li>
            
        //     <li className="nav-link">
        //       <Link
        //         aria-label="Navigate to the Contact section"
        //         to="/contact"
        //         className="waves-effect waves-dark "
        //       >
        //         <i className="mdi-content-mail small" />
        //         <span>Contact</span>
        //       </Link>
        //     </li>
        //     <li className="nav-link">
        //       <a
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         aria-label="Open Lloyd's resume in a new tab"
        //         href=""
        //         className="waves-effect waves-dark  text-darken-3"
        //       >
        //         <i className="mdi-action-description small" />
        //         <span>Resume</span>
        //       </a>
        //     </li>
        //   </ul>
        
        // </div>
