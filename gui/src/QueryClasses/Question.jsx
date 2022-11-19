import React from "react";
import QueryInput from "./QueryInput";

class Question extends React.Component {
	onCLick = async () => {
		// console.log(
		// 	"http://localhost:7200/repositories/KDE?query=" +
		// 		encodeURI(
		// 			"SELECT DISTINCT ?irObj ?totalLoansApproved WHERE { ?irObj ?tmp ?ir.} LIMIT 100"
		// 		),
		// 	{
		// 		headers: {
		// 			Accept: "application/json",
		// 			"Content-Type": "application/json",
		// 		},
		// 	}
		// );

		// fetch(
		// 	"http://localhost:7200/repositories/KDE?query=" +
		// 		encodeURI(this.props.question.toQuery()),
		// 	{
		// 		headers: {
		// 			Accept: "application/json",
		// 			"Content-Type": "application/json",
		// 		},
		// 	}
		// )
		fetch(
			"http://localhost:7200/repositories/KDE",
			// encodeURI(
			// 	"SELECT DISTINCT ?irObj ?totalLoansApproved WHERE { ?irObj ?tmp ?ir.} LIMIT 100"
			// ),
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/sparql-query",
				},
				body: this.props.question.toQuery(),
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// console.log(data.results.bindings)
				this.props.updateResults(data.results.bindings);
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
				{/* {this.renderInputs()} */}
				{this.props.question.toString()}
				<br />
				<button className="send-query-button" onClick={this.onCLick}>
					Send Query
				</button>
			</div>
		);
	}
}

export default Question;
