/*
 * (c) Copyright 2014 ishan.singh. All Rights Reserved.
 */

/*
 * Initialize the arrowImage and other properties
 */
$.init = function(args) {
	$.arrowImage.image = WPATH(args.image);
	for (var prop in args.propertiesForButton) {
		$.buttonView[prop] = args.propertiesForButton[prop];
	}
};
