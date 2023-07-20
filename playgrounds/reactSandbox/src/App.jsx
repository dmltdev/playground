import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import Greet from "./components/Greet";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Greet />
				<Header />
				<Page />
				<Footer />
			</div>
		);
	}
}

export default App;
