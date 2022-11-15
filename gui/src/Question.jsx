import React from "react";
import QueryInput from "./QueryInput";

class Question extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	// this.state = {};
	// }

	onCLick = async () => {
		fetch(
			"https://dbpedia.org/sparql?query=" +
				encodeURI(this.props.question.query) +
				"&format=application%2Fsparql-results%2Bjson"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	};

	renderInputs = () => {
		let sections = [];

		let i = 0;
		for (i = 0; i < this.props.question.vars.length; i++) {
			sections.push(<span>{this.props.question.strings[i]}</span>);
			sections.push(
				<span>
					<QueryInput
						type={this.props.question.vars[i].type}
						value={this.props.question.vars[i].default}
					/>
				</span>
			);
		}

		if (i < this.props.question.strings.length) {
			sections.push(<span>{this.props.question.strings[i]}</span>);
		}

		return sections;
	};

	render() {
		// let i = 0;
		// console.log(this.state.question.to);
		return (
			<div className="question">
				{this.renderInputs()}
				<br />
				<button className="send-query-button" onClick={this.onCLick}>
					Send Query
				</button>
			</div>
		);
	}
}

export default Question;
