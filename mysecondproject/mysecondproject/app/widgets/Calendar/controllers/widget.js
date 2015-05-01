/*
* (c) Copyright 2014 ishan.singh. All Rights Reserved.
*/

//Include the utils file for all the utility functions
Ti.include(WPATH('utils.js'));

var dateContainer = undefined;
var now = new Date();
//get the current month
var currentMonth = now.getMonth();
//get the current date
var currentDate = now.getDate();
//get the current year
var currentYear = now.getFullYear();
//get the number of days in the current month and year
var numberOfDaysInAMonth = _getNumberOfDaysInMonth({
	'year' : currentYear,
	'month' : currentMonth
});
//Day of the week for the 1st date of the month
var day_of_week_for_first_date = _getWeekDay({
	'year' : currentYear,
	'month' : currentMonth,
	'date' : 1
});

//Day of the week for the last date of the month
var day_of_week_for_last_date = _getWeekDay({
	'year' : currentYear,
	'month' : currentMonth,
	'date' : numberOfDaysInAMonth
});

//get the number of days in the previous month and year
var numberOfDaysInAPreviousMonth = _getNumberOfDaysInMonth({
	'year' : currentYear,
	'month' : currentMonth - 1
});

//get the number of days in the previous month and year
var numberOfDaysInANextMonth = _getNumberOfDaysInMonth({
	'year' : currentYear,
	'month' : currentMonth + 1
});

/*
 * Now create the variables that can be used in the Alloy Controller to get the year date and month
 */

$.selectedDate = currentDate;
$.selectedMonth = currentMonth;
$.selectedYear = currentYear;

/*
 * Initialize the days name in an array
 */
var daysNameArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// selected date color=4B7FE1
// unselected date color =D8D7DB

//Now create the days view
for (var i = 0, j = daysNameArr.length; i < j; i++) {
	var dayName = Widget.createController('daysView', {
		'dayName' : daysNameArr[i]
	}).getView();

	if (i == 0) {
		dayName.left = '1%';
	}

	$.daysView.add(dayName);
};
/*
 * Initialise the left arrow and right arrow for month view and year View
 */
$.previousMonth.init({
	'image' : 'previous.png',
	'propertiesForButton' : {
		'left' : 0
	}
});

/*
 * Add event to the previous month Button
 */

$.previousMonth.__views.buttonView.addEventListener('click', function(e) {
	if (currentMonth == 0) {

	} else {
		var month = --currentMonth;
		$.selectedMonth = month;
		_getMonthName(month, $.monthNameLabel);
		$.topDateLabel.text = $.selectedDate + '/' + ($.selectedMonth + 1) + '/' + $.selectedYear;
		day_of_week_for_first_date = _getWeekDay({
			'year' : currentYear,
			'month' : month,
			'date' : 1
		});

		numberOfDaysInAMonth = _getNumberOfDaysInMonth({
			'year' : currentYear,
			'month' : month
		});
		day_of_week_for_last_date = _getWeekDay({
			'year' : currentYear,
			'month' : month,
			'date' : numberOfDaysInAMonth
		});

		numberOfDaysInAPreviousMonth = _getNumberOfDaysInMonth({
			'year' : currentYear,
			'month' : month - 1
		});

		$.datesView.removeAllChildren();
		_makeDaysView({
			'day_of_week_for_first_date' : day_of_week_for_first_date,
			'numberOfDaysInAMonth' : numberOfDaysInAMonth,
			'numberOfDaysInAPreviousMonth' : numberOfDaysInAPreviousMonth,
			'day_of_week_for_last_date' : day_of_week_for_last_date
		});

	}
});

$.nextMonth.init({
	'image' : 'next.png',
	'propertiesForButton' : {
		'right' : 0
	}
});

/*
 * Add event to the nextMonth Button
 */

$.nextMonth.__views.buttonView.addEventListener('click', function(e) {
	if (currentMonth == 11) {

	} else {
		var month = ++currentMonth;
		$.selectedMonth = month;
		_getMonthName(month, $.monthNameLabel);
		$.topDateLabel.text = $.selectedDate + '/' + (month + 1) + '/' + $.selectedYear;
		day_of_week_for_first_date = _getWeekDay({
			'year' : currentYear,
			'month' : month,
			'date' : 1
		});

		numberOfDaysInAMonth = _getNumberOfDaysInMonth({
			'year' : currentYear,
			'month' : month
		});
		day_of_week_for_last_date = _getWeekDay({
			'year' : currentYear,
			'month' : month,
			'date' : numberOfDaysInAMonth
		});

		numberOfDaysInAPreviousMonth = _getNumberOfDaysInMonth({
			'year' : currentYear,
			'month' : month - 1
		});

		$.datesView.removeAllChildren();
		_makeDaysView({
			'day_of_week_for_first_date' : day_of_week_for_first_date,
			'numberOfDaysInAMonth' : numberOfDaysInAMonth,
			'numberOfDaysInAPreviousMonth' : numberOfDaysInAPreviousMonth,
			'day_of_week_for_last_date' : day_of_week_for_last_date
		});
	}
});

$.previousYear.init({
	'image' : 'previous.png',
	'propertiesForButton' : {
		'left' : 0
	}
});

/*
 * Add event to the previousYear Button
 */

$.previousYear.__views.buttonView.addEventListener('click', function(e) {
	var year = --currentYear;
	$.selectedYear = year;
	$.yearNameLabel.text = year;
	$.topDateLabel.text = $.selectedDate + '/' + ($.selectedMonth + 1) + '/' + $.selectedYear;
	day_of_week_for_first_date = _getWeekDay({
		'year' : year,
		'month' : currentMonth,
		'date' : 1
	});

	numberOfDaysInAMonth = _getNumberOfDaysInMonth({
		'year' : year,
		'month' : currentMonth
	});
	day_of_week_for_last_date = _getWeekDay({
		'year' : year,
		'month' : currentMonth,
		'date' : numberOfDaysInAMonth
	});

	numberOfDaysInAPreviousMonth = _getNumberOfDaysInMonth({
		'year' : year,
		'month' : currentMonth - 1
	});

	$.datesView.removeAllChildren();
	_makeDaysView({
		'day_of_week_for_first_date' : day_of_week_for_first_date,
		'numberOfDaysInAMonth' : numberOfDaysInAMonth,
		'numberOfDaysInAPreviousMonth' : numberOfDaysInAPreviousMonth,
		'day_of_week_for_last_date' : day_of_week_for_last_date
	});
});

$.nextYear.init({
	'image' : 'next.png',
	'propertiesForButton' : {
		'right' : 0
	}
});

/*
 * Add event to the nextYear Button
 */

$.nextYear.__views.buttonView.addEventListener('click', function(e) {
	var year = ++currentYear;

	$.selectedYear = year;
	$.yearNameLabel.text = year;
	$.topDateLabel.text = $.selectedDate + '/' + ($.selectedMonth + 1) + '/' + $.selectedYear;
	day_of_week_for_first_date = _getWeekDay({
		'year' : year,
		'month' : currentMonth,
		'date' : 1
	});

	numberOfDaysInAMonth = _getNumberOfDaysInMonth({
		'year' : year,
		'month' : currentMonth
	});
	day_of_week_for_last_date = _getWeekDay({
		'year' : year,
		'month' : currentMonth,
		'date' : numberOfDaysInAMonth
	});

	numberOfDaysInAPreviousMonth = _getNumberOfDaysInMonth({
		'year' : year,
		'month' : currentMonth - 1
	});

	$.datesView.removeAllChildren();
	_makeDaysView({
		'day_of_week_for_first_date' : day_of_week_for_first_date,
		'numberOfDaysInAMonth' : numberOfDaysInAMonth,
		'numberOfDaysInAPreviousMonth' : numberOfDaysInAPreviousMonth,
		'day_of_week_for_last_date' : day_of_week_for_last_date
	});
});

//Set the current Date
$.topDateLabel.text = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();

//Set the current month
_getMonthName(new Date().getMonth(), $.monthNameLabel);
//Set the current year
$.yearNameLabel.text = new Date().getFullYear();

function _makeDaysView(args) {
	var lastSelectedDate = undefined;
	var previousMonthDatesEnd = args.numberOfDaysInAPreviousMonth - (args.day_of_week_for_first_date - 1);
	Ti.API.info(previousMonthDatesEnd);
	var firstDayOftheWeek = args.day_of_week_for_first_date;
	var nextMonthDatesStart = 1;
	for (var i = 0; i < 42; i++) {
		if (i % 7 == 0) {
			dateContainer = Widget.createController('dateContainer').getView();
			if (i == 0) {
				dateContainer.top = '3%';
			}
			$.datesView.add(dateContainer);
		}
		if (args.day_of_week_for_first_date >= 0) {
			if (i <= (args.day_of_week_for_first_date - 1)) {
				var dateView = Widget.createController('dateView', {
					'date' : previousMonthDatesEnd++,
					'backgroundColor' : '#6E6E6E',
					'textColor' : '#A4A4A4'
				}).getView();
			} else {
				var dateView = Widget.createController('dateView', {
					'date' : 1,
					'backgroundColor' : '#FFFFFF',
					'textColor' : '#2E2E2E'
				}).getView();

				dateView.addEventListener('click', function(e) {
					if (lastSelectedDate == undefined) {
						this.backgroundColor = '#4B7FE1';
						this.children[0].color = '#FFFFFF';
						lastSelectedDate = this;
					} else {
						lastSelectedDate.backgroundColor = '#FFFFFF';
						lastSelectedDate.children[0].color = '#2E2E2E';
						this.backgroundColor = '#4B7FE1';
						this.children[0].color = '#FFFFFF';
						lastSelectedDate = this;
					}
					$.selectedDate = this.children[0].text;
					$.topDateLabel.text = $.selectedDate + '/' + ($.selectedMonth + 1) + '/' + $.selectedYear;

				});

				args.day_of_week_for_first_date = -1;
			}
			if (i == 0) {
				dateView.left = '1%';
			}
			dateContainer.add(dateView);
		} else {
			for (var j = 0; j < (args.numberOfDaysInAMonth - 1); j++) {
				if (j < (6 - firstDayOftheWeek)) {
					var dateView = Widget.createController('dateView', {
						'date' : j + 2,
						'backgroundColor' : '#FFFFFF',
						'textColor' : '#2E2E2E'
					}).getView();
					dateView.addEventListener('click', function(e) {
						if (lastSelectedDate == undefined) {
							this.backgroundColor = '#4B7FE1';
							this.children[0].color = '#FFFFFF';
							lastSelectedDate = this;
						} else {
							lastSelectedDate.backgroundColor = '#FFFFFF';
							lastSelectedDate.children[0].color = '#2E2E2E';
							this.backgroundColor = '#4B7FE1';
							this.children[0].color = '#FFFFFF';
							lastSelectedDate = this;
						}
						$.selectedDate = this.children[0].text;
						$.topDateLabel.text = $.selectedDate + '/' + ($.selectedMonth + 1) + '/' + $.selectedYear;
					});
					dateContainer.add(dateView);
				} else {

					if (dateContainer.children.length == 7) {
						dateContainer = Widget.createController('dateContainer').getView();
						$.datesView.add(dateContainer);
					}

					var dateView = Widget.createController('dateView', {
						'date' : j + 2,
						'backgroundColor' : '#FFFFFF',
						'textColor' : '#2E2E2E'
					}).getView();

					dateView.addEventListener('click', function(e) {
						if (lastSelectedDate == undefined) {
							this.backgroundColor = '#4B7FE1';
							this.children[0].color = '#FFFFFF';
							lastSelectedDate = this;
						} else {
							lastSelectedDate.backgroundColor = '#FFFFFF';
							lastSelectedDate.children[0].color = '#2E2E2E';
							this.backgroundColor = '#4B7FE1';
							this.children[0].color = '#FFFFFF';
							lastSelectedDate = this;
						}
						$.selectedDate = this.children[0].text;
						$.topDateLabel.text = $.selectedDate + '/' + ($.selectedMonth + 1) + '/' + $.selectedYear;
					});

					if (dateContainer.children.length == 0) {
						dateView.left = '1%';
					}
					dateContainer.add(dateView);
				}
				i = args.numberOfDaysInAMonth;
			}
			for (var k = 0; k < (7 - args.day_of_week_for_last_date); k++) {
				var dateView = Widget.createController('dateView', {
					'date' : nextMonthDatesStart++,
					'backgroundColor' : '#6E6E6E',
					'textColor' : '#A4A4A4'
				}).getView();

				dateContainer.add(dateView);
			};
			args.day_of_week_for_last_date = 7;
			args.numberOfDaysInAMonth = 0;

		}
	};

}

_makeDaysView({
	'day_of_week_for_first_date' : day_of_week_for_first_date,
	'numberOfDaysInAMonth' : numberOfDaysInAMonth,
	'numberOfDaysInAPreviousMonth' : numberOfDaysInAPreviousMonth,
	'day_of_week_for_last_date' : day_of_week_for_last_date
});
