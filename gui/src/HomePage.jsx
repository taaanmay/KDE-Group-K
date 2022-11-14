import React from "react";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
	}

	onCLick = async () => {
		this.setState({ clicked: true });
		fetch(
			"https://dbpedia.org/sparql?query=" +
				encodeURI("SELECT * WHERE { ?s ?p ?o } LIMIT 100") +
				"&format=application%2Fsparql-results%2Bjson"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	};

	render() {
		return (
			<div className="homepage">
				<div>
					<button
						className="send-query-button"
						onClick={this.onCLick}
					>
						Send Query
					</button>
					{this.state.clicked ? <p>Clicked!</p> : <></>}
				</div>
			</div>
		);
	}
}

export default HomePage;
