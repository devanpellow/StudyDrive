import React, { Component } from "react";
import axios from "axios"

export class Results extends Component {

  state = {
    fact:''
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.result !== this.props.result && this.props.result){
    axios.get(
      `http://numbersapi.com/${this.props.result}`).then(response => {
        this.setState({fact: response.data})
      })
    }
  }
 
  
	render() {
    
		return (
			<div id="number-fact">
        <h3>Number Fact:</h3>
				<p>{this.state.fact}</p>
			</div>
		);
	}
}

export default Results;
