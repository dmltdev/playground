import React, { Component, useState } from "react";
import Game from "./components/Board";
import Welcome from "./components/Welcome"

export default function App() {
	return (
		<>
			<Welcome />
			<Game />
		</>
	);
}
