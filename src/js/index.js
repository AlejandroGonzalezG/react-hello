//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import NavBar from "./component/NavBar.jsx"
import Jumbotron from "./component/Jumbotron.jsx"
import Cards from "./component/Cards.jsx"
import Footer from "./component/Footer.jsx";
import Home from "./component/Home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
