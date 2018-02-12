const INTEREST_RATE_PER_DAY = 12.5 / 36500;
console.log(INTEREST_RATE_PER_DAY);

const months = [
	{
		month: 'Feb',
		days: 28,
		beginAmount: 123041.394,
		get endAmount() {
			console.log(
				'Interest: ',
				this.beginAmount * INTEREST_RATE_PER_DAY * this.days
			);
			return (
				this.beginAmount -
				this.beginAmount * INTEREST_RATE_PER_DAY * this.days -
				55000
			);
		}
	}
];

console.log(months[0].endAmount);
