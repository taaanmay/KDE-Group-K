import React from "react";
import QueryInput from "./QueryInput";

class Question extends React.Component {
	onCLick = async () => {
		fetch("http://localhost:7200/repositories/KDE", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/sparql-query",
			},
			body: this.props.question.toQuery(),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.props.updateResults(data.results.bindings);
			});
	};

	renderInputs = () => {
		let sections = [];

		let i = 0;
		let query = this.props.question.query;

		query.questionBuilder.forEach((pair) => {
			let updateVar = (val) => {
				console.log(val);
				query.vars[pair[1]].value = val;
				this.forceUpdate();
			};
			if (pair[0] === "vars") {
				sections.push(
					<span key={i + "in" + pair[1]}>
						<QueryInput
							type={query.vars[pair[1]].type}
							value={query.vars[pair[1]].value}
							updateVar={updateVar}
						/>
					</span>
				);
			} else
				sections.push(
					<span key={i + "s" + pair[1]}>
						{query[pair[0]][pair[1]].value}
					</span>
				);
		});
		return sections;
	};

	render() {
		return (
			<div className="question">
				{this.renderInputs()}
				{/* {this.props.question.toString()} */}
				<br />
				<button className="send-query-button" onClick={this.onCLick}>
					Send Query
				</button>
			</div>
		);
	}
}

export default Question;
