import React, { Component } from "react";

export class Calculator extends Component {

	render() {
		return (
			<div id="keypad" className="calculator">
				<div className="result">
					<p id="calc-top">{this.props.display}</p>
					<p id="calc-bottom">{this.props.result}</p>
				</div>
				<button
					className="width-double"
					onClick={e => this.props.onClick(e.target.name)}
					name="clear"
				>
					AC
				</button>
				<button
					onClick={e => this.props.onClick(e.target.name)}
					name="delete"
				>
					DEL
				</button>
				<button
					className="operator"
					onClick={e => this.props.onClick(e.target.name)}
					value="&divide;"
					name="/"
				>
					&divide;
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="7"
					name="7"
				>
					7
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="8"
					name="8"
				>
					8
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="9"
					name="9"
				>
					9
				</button>
				<button
					className="operator"
					onClick={e => this.props.onClick(e.target.name)}
					value="*"
					name="x"
				>
					&times;
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="4"
					name="4"
				>
					4
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="5"
					name="5"
				>
					5
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="6"
					name="6"
				>
					6
				</button>
				<button
					className="operator"
					onClick={e => this.props.onClick(e.target.name)}
					value="-"
					name="-"
				>
					-
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="1"
					name="1"
				>
					1
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="2"
					name="2"
				>
					2
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="3"
					name="3"
				>
					3
				</button>
				<button
					className="operator"
					onClick={e => this.props.onClick(e.target.name)}
					value="+"
					name="+"
				>
					+
				</button>
				<button
					className="width-double number"
					onClick={e => this.props.onClick(e.target.name)}
					value="0"
					name="0"
				>
					0
				</button>
				<button
					className="number"
					onClick={e => this.props.onClick(e.target.name)}
					value="."
					name="."
				>
					.
				</button>
				<button
					className="operator"
					onClick={e => this.props.onClick(e.target.name)}
					value="="
					name="="
				>
					=
				</button>
			</div>
		);
	}
}

export default Calculator;
