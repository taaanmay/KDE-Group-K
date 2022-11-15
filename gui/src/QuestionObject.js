class QuestionObject {
	constructor(strings, vars, query) {
		this.strings = strings;
		this.vars = vars;
		this.query = query;
	}

	toString = () => {
		let i = 0;
		let string = "";
		for (i = 0; i < this.vars.length; i++) {
			string += this.strings[i];
			string += this.vars[i].default;
		}

		if (i < this.strings.length) {
			string += this.strings[i];
		}

		return string;
	};
}

export default QuestionObject;
