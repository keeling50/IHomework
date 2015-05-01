/*
 * (c) Copyright 2014 ishan.singh. All Rights Reserved.
 */

/*
 * Create a function to set the month name in the month label.
 * This function will take the month number as argument
 */

function _getMonthName(monthNumber, labelObj) {
	switch(monthNumber) {
		case 0:
			labelObj.text = 'January';
			break;
		case 1:
			labelObj.text = 'February';
			break;
		case 2:
			labelObj.text = 'March';
			break;
		case 3:
			labelObj.text = 'April';
			break;
		case 4:
			labelObj.text = 'May';
			break;
		case 5:
			labelObj.text = 'June';
			break;
		case 6:
			labelObj.text = 'July';
			break;
		case 7:
			labelObj.text = 'August';
			break;
		case 8:
			labelObj.text = 'September';
			break;
		case 9:
			labelObj.text = 'October';
			break;
		case 10:
			labelObj.text = 'November';
			break;
		case 11:
			labelObj.text = 'December';
			break;
	}
}

/*
 * This function will calculate the number of days for a given month and year
 */
var _getNumberOfDaysInMonth = function(args) {
	var monthStart = new Date(args.year, args.month, 1);
	var monthEnd = new Date(args.year, args.month + 1, 1);
	var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
	return monthLength;
};

/*
 * This function will return the day of the week for the given month and year and date
 */

var _getWeekDay = function(args) {
	return new Date(parseInt(args.year), parseInt(args.month), parseInt(args.date)).getDay();
};
