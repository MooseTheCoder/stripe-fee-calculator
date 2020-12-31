const StripeFees = require('./StripeFeeCalculator');

let Amount = 100; // £100

console.log(StripeFees.Calculate({
	amount : Amount * 100,
	application_fee : 0.6,
	currency_convert : false,
	symbol : '£',
}));

console.log(StripeFees.Calculate({
	amount : Amount * 100,
	application_fee : 0.6,
	currency_convert : true,
	symbol : '£',
}));