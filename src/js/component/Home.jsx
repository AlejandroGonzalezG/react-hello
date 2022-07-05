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
			<div className="container">
				<Jumbotron title={"A Warm Welcome!"} description={"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    	buttonURL={"#"} buttonLabel={"Call to action!"} />
            	<Cards cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin diam tellus, ac vulputate velit vulputate id. Fusce mollis et mi eu convallis. Aenean in dignissim mi, ut imperdiet mi." />
			</div>
            <Footer />
		</div>
	);
};

export default Home;