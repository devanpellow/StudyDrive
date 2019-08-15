import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Calculator from "./components/Calculator";
import Results from "./components/Results";

class App extends Component {
	state = {
		result: "",
		display: "",
		input: "",
		fact: ""
	};

	onClick = button => {
		if (button === "=") {
			this.calculate();
		} else if (button === "clear") {
			this.setState({
				input: "",
				display: "",
				result: "",
				fact: ""
			});
		} else if (button === "delete") {
			this.setState({
				input: this.state.input.slice(0, -1),
				display: this.state.display.slice(0, -1)
			});
		} else {
			this.setState({
				input: this.state.input + button,
				display: this.state.display + button
			});
		}
	};

	calculate = () => {
		try {
			this.setState({
				result: (eval(this.state.input) || "") + ""
			});
		} catch (e) {
			this.setState({
				display: "oops try again!"
			});
		}
	};

	render() {
		return (
			<div className="App">
				<h1>Studydrive Calculator</h1>
				<div id="content-wrapper">
					<Calculator
						onClick={this.onClick}
						display={this.state.display}
						result={this.state.result}
					/>
					<Results
						fact={this.state.fact}
						result={this.state.result}
					/>
				</div>
			</div>
		);
	}
}

export default App;
