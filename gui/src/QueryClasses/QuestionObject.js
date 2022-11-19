class QuestionObject {
	constructor(query) {
		this.query = query;
	}

	toString() {
		return this.createString(this.query.questionBuilder);
	}

	toQuery() {
		return this.createString(this.query.queryBuilder);
	}

	createString = (builder) => {
		let string = "";
		builder.forEach((pair) => {
			string += this.query[pair[0]][pair[1]].value;
		});
		console.log(string);
		return string;
	};
}

export default QuestionObject;
