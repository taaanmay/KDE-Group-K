class QuestionObject {
	constructor(query) {
		this.query = query;
		// this.queryStrings = query.queryStrings;
		// this.vars = query.vars;
		// this.questionStrings = query.questionStrings;
	}

	toString() {
		return this.createString(this.query.questionBuilder);
	}

	toQuery() {
		return this.createString(this.query.queryBuilder);
	}

	createString = (builder) => {
		// let i = 0;
		let string = "";
		builder.forEach((pair) => {
			string += this.query[pair[0]][pair[1]].value;
		});
		// for (i = 0; i < this.vars.length; i++) {
		// 	string += sections[i];
		// 	string += this.vars[i].value;
		// }

		// if (i < sections.length) {
		// 	string += sections[i];
		// }

		// string.replace("'", '"');
		// string.replace('"', "'");
		return string;
	};
}

export default QuestionObject;
