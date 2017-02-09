/*
Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
*/

const 	iPhone = 699,
		accessories = 10,
		mentalThreshold = 750;
let	money = 5100,
	purchaseAmount = 0;

const calculateTax = (amount) = {
	return amount * 0.08;
}

while (money > 0) {
	const price = iPhone + accessories;
	money -= iPhone;
	purchaseAmount += iPhone;

	if (purchaseAmount < mentalThreshold) {
		money -= accessories;
		purchaseAmount += accessories;
	}
	console.log('Purchase amount: $' + purchaseAmount.toFixed(2));
}
