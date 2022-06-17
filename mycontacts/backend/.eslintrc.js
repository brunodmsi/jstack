module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'class-methods-use-this': 'off',
		camelcase: 'off',
		'object-curly-newline': 'off',
	},
};
