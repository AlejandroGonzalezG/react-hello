import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron.jsx";
import NavBar from "./NavBar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
			<Jumbotron title="A Warm Welcome!" description="Lorem pisum dolor sit amet, consectetur adpisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscpit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					   buttonLabel="Call the action" buttonURL="https://4geeks.com/es" />
		</div>
	);
};

export default Home;
