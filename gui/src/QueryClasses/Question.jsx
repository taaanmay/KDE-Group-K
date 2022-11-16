import React from "react";
import QueryInput from "./QueryInput";

class Question extends React.Component {
	onCLick = async () => {
		fetch(
			"https://dbpedia.org/sparql?query=" +
				encodeURI(this.props.question.toQuery()) +
				"&format=application%2Fsparql-results%2Bjson"
		)
			.then((response) => response.json())
			.then((data) => {
				this.props.updateResults(data.results.bindings);
				console.log(data);
			});
	};

	renderInputs = () => {
		let sections = [];

		let i = 0;
		for (i = 0; i < this.props.question.vars.length; i++) {
			let j = i;
			let updateVar = (val) => {
				console.log(val);
				this.props.question.vars[j].value = val;
				this.forceUpdate();
			};
			sections.push(
				<span key={i + "s"}>{this.props.question.strings[i]}</span>
			);
			sections.push(
				<span key={i + "in"}>
					<QueryInput
						type={this.props.question.vars[i].type}
						value={this.props.question.vars[i].value}
						updateVar={updateVar}
					/>
				</span>
			);
		}

		if (i < this.props.question.strings.length) {
			sections.push(
				<span key={i + "s"}>{this.props.question.strings[i]}</span>
			);
		}

		return sections;
	};

	render() {
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
