var john = {
	name: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	calcTips: function () {
		this.tips = [];
		this.finalValues = [];

		for(var i = 0; i < this.bills.length; i++) {

			// Determine the percentage based on tipping rules

			var percentage;
			var bill = this.bills[i];

			if(bill < 50) {
				percentage = .2;
			} else if (bill >= 50 && bill < 200) {
				percentage = .15
			} else {
				percentage = .1;
			}

			// Add results to corresponding arrays

			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;

		}
	}
}


var mark = {
	name: 'Mark Miles',
	bills: [110, 500, 23, 75],
	calcTips: function () {
		this.tips = [];
		this.finalValues = [];

		for(var i = 0; i < this.bills.length; i++) {

			// Determine the percentage based on tipping rules

			var percentage;
			var bill = this.bills[i];

			if(bill < 50) {
				percentage = .15;
			} else if (bill >= 50 && bill < 200) {
				percentage = .1
			} else {
				percentage = .25;
			}

			// Add results to corresponding arrays

			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;

		}
	}
}

function calcAverage(tips) {

	var sum = 0;

	for(var i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
}

// Do the calculations

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average < mark.average) {
	console.log(mark.name + '\s has paid more in tips with an amount of $' + mark.average);
} else {
	console.log(john.name + '\s has paid more in tips with an amount of $' + john.average);
}

