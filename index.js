var Dictionary = {
	language: 'en',
	dictionary: false,
	setup: function(args) {
		if (args.language) {
			this.language = args.language;
		};
		if (args.dictionary) {
			this.dictionary = args.dictionary;
		};
	},
	translate: function(value) {
		if (!this.dictionary) {
			return value;
		};
		if (!this.dictionary[value] || !this.dictionary[value][this.language]) {
			return value;
		};
		return this.dictionary[value][this.language];
	}
}

export default Dictionary;