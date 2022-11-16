import React from "react";
import Question from "./Question";
import QuestionObject from "./QuestionObject";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.questions = [
			new QuestionObject(
				[
					"How many new homes were approved loans when the annual interest rate was over ",
					"%? ",
				],
				[{ value: "4.5", type: "text" }],
				["SELECT * WHERE { ?s ?p ?o } LIMIT "]
			),
			new QuestionObject(
				[
					"What was the average price for new properties in Dublin when the interest rate was less than ",
					"%? ",
				],
				[{ value: "4.5", type: "text" }],
				["SELECT * WHERE { ?s ?p ?o } LIMIT "]
			),
			new QuestionObject(
				[
					"When the average new property price in Dublin was ",
					" how many new loans were approved? ",
				],
				[{ value: "4.5", type: "text" }],
				["SELECT * WHERE { ?s ?p ?o } LIMIT "]
			),
		];
		this.state = { selected: this.questions[0], down: false };
	}

	drop = () => {
		this.setState({ down: !this.state.down });
	};

	renderQuestion = (question) => {
		return (
			<Question
				question={question}
				updateResults={this.props.updateResults}
			/>
		);
	};

	render() {
		return (
			<div className="dropdown">
				<div className="dropdown-column">
					<button type="submit" onClick={this.drop}>
						Drop
					</button>
				</div>
				<div className="dropdown-column">
					{this.renderQuestion(this.state.selected)}

					{this.state.down ? (
						<ul>
							{this.questions.map((q) => {
								let onSelect = () => {
									this.setState({ selected: q, down: false });
									console.log("click");

									console.log(q);
									console.log(this.state.selected);
								};
								return (
									<li
										className="dropdown-option"
										key={q.strings[0]}
										onClick={onSelect}
									>
										{q.toString()}
									</li>
								);
							})}
						</ul>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}

export default Dropdown;
