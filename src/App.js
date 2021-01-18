import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";

import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

// const Landing = () => (
// 	<App />
// )

function App() {
	document.title = "LB2 React Portfolio";
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL || "/react-portfolio"}>
		{/* <BrowserRouter basename={window.location.pathname || "/react-portfolio"}> */}
			<div className="App">
        <div className="card-image ">
      <Header />
        <Navbar />
				<Switch>
					<Route exact path="/" className="App-link" component={App}>
						<LandingPage />
					</Route>
					<Route exact path="/about" component={About} className="App-link">
						<About />
            </Route>
					<Route exact path="/project" component={Projects} className="App-link">
						<Projects />
            </Route>
					<Route exact path="/contact" component={Contact} className="App-link">
						<Contact />
					</Route>
				</Switch>
			</div>
			<Footer />
      </div>
		</BrowserRouter>
	);
}

export default App;
