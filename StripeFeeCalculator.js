const STRIPE_FLAT_FEE = 20;
const STRIPE_EU_FEE = 1.4;
const STRIPE_NON_EU_FEE = 2.9;
const STRIPE_CC_FEE = 2.0

 /**
  * @param {Object} Options Options object.
  * @param {Number} Options.amount The value of the transaction (In pennies (eg £1 = 100)).
  * @param {Boolean} Options.currency_convert Calulcate if a currency conversion is necessary.
  * @param {Number} Options.application_fee The name of the user.
  * @param {String} Options.symbol Currency symbol (£,$) to make output human.
  */
module.exports.Calculate = (Options) => {
	let EuFee = 0;
	let NonEuFee = 0;
	if(Options.application_fee){
		EuFee = (
			Math.round(
				(STRIPE_EU_FEE / 100 ) * Options.amount
			) + STRIPE_FLAT_FEE
		) + Math.ceil(
			(Options.application_fee / 100 ) * Options.amount
		)
	}else{
		EuFee = (
			Math.round(
				(STRIPE_EU_FEE / 100 ) * Options.amount
			) + STRIPE_FLAT_FEE
		)
	}

	if(Options.application_fee){
		NonEuFee = (
			Math.round(
				(STRIPE_NON_EU_FEE / 100 ) * Options.amount
			) + STRIPE_FLAT_FEE
		) + Math.ceil(
			(Options.application_fee / 100 ) * Options.amount
		)
	}else{
		NonEuFee = (
			Math.round(
				(NON_EU_FEE / 100 ) * Options.amount
			) + STRIPE_FLAT_FEE
		)
	}
	if(Options.currency_convert && Options.currency_convert === true){
		let CCFee = Math.round(
			(STRIPE_CC_FEE / 100 ) * Options.amount
		)
		EuFee+=CCFee;
		NonEuFee+=CCFee;
	}

	if(Options.symbol){
		EuFee = Options.symbol + (EuFee / 100).toFixed(2);
		NonEuFee = Options.symbol + (NonEuFee / 100).toFixed(2);
	}
	return {
		eu_fee : EuFee,
		non_eu_fee : NonEuFee
	}	
}