import React, { Component } from "react";
import "./App.css"
export default class App extends Component {
	state = {
		data: "",
	};

	getResponse = () => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json) => {
        console.log(json)
				this.setState({
					data: json,
				});
			})
      .catch((err)=>{
        this.setState({
					data: err,
				});
      })
	};
	render() {
		return (
			<div className="container">
				<pre className="res">
          {JSON.stringify(this.state.data, undefined, 4)}
        </pre>
				<button onClick={this.getResponse}>Fetch</button>
			</div>
		);
	}
}
