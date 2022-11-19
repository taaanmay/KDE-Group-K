import React from "react";
import Question from "./Question";
import QuestionObject from "./QuestionObject";
import Queries from "./Queries.json";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.questions = [];
		Object.keys(Queries).forEach((query) => {
			this.questions.push(new QuestionObject(Queries[query]));
		});

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
						{this.state.down ? <>&#9650;</> : <>&#9660;</>}
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
