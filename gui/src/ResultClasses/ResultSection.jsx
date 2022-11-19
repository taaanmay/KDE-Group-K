import React from "react";

class ResultSection extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	renderResults = () => {
		let resultsComponents = [];
		let i = 0;

		if (this.props.results != null) {
			this.props.results.forEach((result) => {
				let resultProperties = [];

				Object.keys(result).forEach((key) =>
					resultProperties.push(
						<tr key={key}>
							<td>{key}</td>
							<td>{result[key].value}</td>
						</tr>
					)
				);

				resultsComponents.push(
					<table className="result" key={"res" + i}>
						<tbody>{resultProperties}</tbody>
					</table>
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
