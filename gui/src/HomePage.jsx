import React from "react";
import Dropdown from "./Dropdown";
import ResultSection from "./ResultSection";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false, results: null };
	}

	updateResults = (results) => {
		this.setState({ results: results });
	};

	render() {
		return (
			<div className="homepage">
				<div className="query-section">
					<Dropdown updateResults={this.updateResults} />
				</div>
				<ResultSection results={this.state.results} />
			</div>
		);
	}
}

export default HomePage;
