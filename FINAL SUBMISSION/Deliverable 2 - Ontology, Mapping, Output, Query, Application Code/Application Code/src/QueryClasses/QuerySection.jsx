import React from "react";
import Dropdown from "./Dropdown";

class QuerySection extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className="query-section">
				<h2>Query</h2>
				<Dropdown updateResults={this.props.updateResults} />
			</div>
		);
	}
}

export default QuerySection;
