import React from "react";

class QueryInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: props.value };
		this.type = props.type;
	}

	onChange = (event) => {
		// this.setState({ value: event.target.value });
		this.props.updateVar(event.target.value);
	};

	render() {
		return (
			// <form>
			<input
				onChange={this.onChange}
				type={this.type}
				name="name"
				value={this.props.value}
			/>
			// </form>
		);
	}
}

export default QueryInput;
