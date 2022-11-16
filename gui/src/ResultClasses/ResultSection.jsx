import React from "react";

class ResultSection extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	renderResults = () => {
		let resultsComponents = [];
		let i = 0;

		if (this.props.results != null) {
			this.props.results.forEach((element) => {
				resultsComponents.push(
					<div className="result" key={"res" + i}>
						<div>o: {element.o.value}</div>
						<div>p: {element.p.value}</div>
						<div>s: {element.s.value}</div>
					</div>
				);
				i++;
			});

			return resultsComponents;
		}
	};

	render() {
		return (
			<div className="result-section">
				<h2>Results</h2>
				<div>{this.renderResults()}</div>
			</div>
		);
	}
}

export default ResultSection;
