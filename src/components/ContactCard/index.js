import React from "react";
import "./style.css";

import { dom } from '@fortawesome/fontawesome-svg-core';

dom.watch()
function Contact() {
    return (
        <section className="container-color">
        
        <h3 className="intro subtitle">Thank you for your time, please get in touch!</h3>
   
    <br></br>
    <br></br>

    <p>
        Email:
        <a
          href="mailto:barnes.lloyd86@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        barnes.lloyd86@gmail.com
    </a>
    </p>
        {/* <i className="fas fa-external-link-alt" > */}
    
      <p>
        Github:
        <a
          href="https://github.com/lbarnes86"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/lbarnes86
        </a>
    </p>
      <p>
        LinkedIn:
        <a
          href="https://www.linkedin.com/in/lloyd-barnes-ii/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/lloyd-barnes-ii/
        </a>
    </p>
      <p>
        Phone:
        <a
          href="tel:601-622-6225"
          rel="noopener noreferrer"
        >
          (601) 622-6225
        </a>
    </p>
    </section>
    );
  }
  
  export default Contact;
  