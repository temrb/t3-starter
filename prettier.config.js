/** @type {import("prettier").Config} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 4,
	useTabs: true,
	bracketSpacing: true,
	trailingComma: 'all',
};

module.exports = config;