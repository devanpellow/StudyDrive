import React, { Component } from "react";

export class Calculator extends Component {
	state = {
		input: ''
	};

	handleClick = button => {
    const { name } = button.target;
		if (button === "=") {
			this.calulate();
		} else if (button === "clear") {
			this.setState({
        title: ''
			})
		} else {
      console.log(name)
      this.setState({
       input: this.state.input += button.target.name 
      })
    }
	};

	render() {
		return (
			<div>
				<input value={this.state.input}></input>
				<div className="keypad">
					<button onClick={this.handleClick} name="">
						C
					</button>
					<button onClick={this.handleClick} value='(' name="(">
						(
					</button>
					<button onClick={this.handleClick} value=')' name=")">
						)
					</button>
					<button onClick={this.handleClick} value='/' name='&divide;'>
						&divide;
					</button>
					<br />
					<button onClick={this.handleClick} value="9" name="9">
						9
					</button>
					<button onClick={this.handleClick} value="8" name="8">
						8
					</button>
					<button onClick={this.handleClick} value="7" name="7">
						7
					</button>
					<button onClick={this.handleClick} value="*" name="x">
						&times;
					</button>
					<br />
					<button onClick={this.handleClick} value="6" name="6">
						6
					</button>
					<button onClick={this.handleClick} value="5" name="5">
						5
					</button>
					<button onClick={this.handleClick} value="4" name="4">
						4
					</button>
					<button onClick={this.handleClick} value="-" name="-">
						-
					</button>
					<br />
					<button onClick={this.handleClick} value="3" name="3">
						3
					</button>
					<button onClick={this.handleClick} value="2" name="2">
						2
					</button>
					<button onClick={this.handleClick} value="1" name="1">
						1
					</button>
					<button onClick={this.handleClick} value="+" name="+">
						+
					</button>
					<br />
					<button onClick={this.handleClick} value="." name=".">
						.
					</button>
					<button onClick={this.handleClick} value="0" name="0">
						0
					</button>
					<button onClick={this.handleClick} value="=" name="=">
						=
					</button>
					<br />
				</div>
			</div>
		);
	}
}

export default Calculator;
