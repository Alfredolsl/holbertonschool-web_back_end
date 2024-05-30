import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
	const budget = getBudgetObject(income, gdp, capita);

	const fullBudget = {
		...budget,
		getIncomeInDollars(income) {
			return `$${income}`;
		},
		getIncomeInEuros:1(income) {
			return `${income} euros`;
		},
	};

	return fullBudget;
}
