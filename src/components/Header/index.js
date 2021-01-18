import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from "../../pages/LandingPage";
import "./style.css"
// import logo from "../../content/AboutData/l-log.png"

function Header() {
	return (
        <header className="card-image waves-effect waves-block waves-light">
        <Link className="App-header"  to="/" href={Landing}>
    
        {/* <main className="logo">
			<img src={logo} className="logo" alt="logo" />
		</main> */}
            <h1 className="title">Lloyd Barnes, II</h1>
            <h3 className="intro subtitle">Full Stack Developer</h3>
        
       
  
            </Link>
            </header>
	);
}

export default Header;