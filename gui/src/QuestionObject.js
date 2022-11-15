class QuestionObject {
	constructor(strings, vars, query) {
		this.strings = strings;
		this.vars = vars;
		this.query = query;
	}

	toString() {
		return this.createString(this.strings);
	}

	toQuery() {
		return this.createString(this.query);
	}

	createString = (sections) => {
		let i = 0;
		let string = "";
		for (i = 0; i < this.vars.length; i++) {
			string += sections[i];
			string += this.vars[i].default;
		}

		if (i < sections.length) {
			string += sections[i];
		}

		return string;
	};
}

export default QuestionObject;
