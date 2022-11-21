import React from "react";
import QuerySection from "./QueryClasses/QuerySection";
import ResultSection from "./ResultClasses/ResultSection";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { results: null };
	}

	updateResults = (results) => {
		this.setState({ results: results });
	};

	render() {
		return (
			<div className="homepage">
				<QuerySection updateResults={this.updateResults} />
				<ResultSection results={this.state.results} />
			</div>
		);
	}
}

export default HomePage;
