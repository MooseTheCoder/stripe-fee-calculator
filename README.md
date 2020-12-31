#### This module assumes default stripe processing fees

```json
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

#### `symbol`

Currency symbol (£,$, etc...) for human formatting in the response.