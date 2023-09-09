import { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import ControlledComponent from "./components/controlledComponent";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Greet />
				<Header />
				<Page />
				<ControlledComponent />
				<Footer />
				
			</div>
		);
	}
}

export default App;
