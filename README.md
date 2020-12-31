#### This module assumes default stripe processing fees

```js
{
	amount : 100,
	currency_convert : false,
    	application_fee : 0,
    	symbol : '£'
}
```



#### `amount` - Required

The transaction value in the same format stripe expects it (eg £1 = 100)

#### `currency_convert` - Optional

Determine if a currency conversion will take place during the transaction (eg, an issued card who's funds are USD paying to GBP)

#### `application_fee` - Optional

Your stripe connect application fee

#### `symbol` - Optional

Currency symbol (£,$, etc...) for human formatting in the response.



```js
const StripeFees = require('./StripeFeeCalculator');

let Amount = 1 // £1

StripeFees.Calculate({
	amount : Amount * 100,
	application_fee : 0.6,
	currency_convert : false,
	symbol : '£',
}) // { eu_fee: '£2.20', non_eu_fee: '£3.70' }
```