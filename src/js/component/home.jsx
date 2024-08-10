import React from "react";
import Trafficlight from "./trafficlight";
import ReactDOM from "react-dom";

//create your first component
const Home = () => {
	return (
		<div className="background">
			 <Trafficlight />
		</div>
	);
};

export default Home;
