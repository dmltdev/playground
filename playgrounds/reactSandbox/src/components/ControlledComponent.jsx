import { useState } from "react";

const ControlledComponent = () => {
	const [inputValue, setInputValue] = useState("");
	const handleChange = event => {
		setInputValue(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={handleChange}
			></input>
			<p>Pasted text: {inputValue}</p>
		</div>
	);
};

export default ControlledComponent;
