import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'font-awesome/css/font-awesome.min.css';
// import { FaEnvelope } from "react-icons/fa";
import "./style.css";
// import background from "../../background-gradient.png";
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch() // This will kick off the initial replacement of i to svg tags and configure a MutationObserver
function Footer() {
	return (
		<footer>
			<section className="container">
            <div className="card-contact text-white bg-dark mb-3 start-project-card">
                <div className="card-body ">
                    <h3 className="intro subtitle contact-me-subtitle">Contact Me</h3>
                    
                    <h3 className="intro subtitle">
    
                        <a href="https://github.com/lbarnes86" target="_blank" rel="noopener noreferrer" className="social-icon "><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/lloyd-barnes-ii/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:barnes.lloyd86@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa fa-envelope"></i></a>
    
                    </h3>
                    
                      <div className="footer-btm"> Made by Lloyd Barnes, II. Copyright &copy; | 2021
                      </div> 
                </div>
            </div>
        </section>
		</footer>
	);
}

export default Footer;