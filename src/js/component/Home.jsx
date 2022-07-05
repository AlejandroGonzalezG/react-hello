import React from "react";

import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
			<div className="container p-2">
				<Jumbotron title={"A Warm Welcome!"} description={"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."}
                    	buttonURL={"#"} buttonLabel={"Call to action!"} />
            	<Cards cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin diam tellus, ac vulputate velit vulputate id. Fusce mollis et mi eu convallis. Aenean in dignissim mi, ut imperdiet mi." />
			</div>
            <Footer />
		</div>
	);
};

export default Home;