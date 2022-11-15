import React from "react";
import Dropdown from "./Dropdown";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
	}

	render() {
		return (
			<div className="homepage">
				<div className="query-section">
					<Dropdown />
				</div>
				<div className="result-section">{/* <Dropdown /> */}</div>
			</div>
		);
	}
}

export default HomePage;
