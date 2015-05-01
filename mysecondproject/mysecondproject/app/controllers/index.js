var aUser = Alloy.createModel('User');
var myassignment = Alloy.Collections.assignment;
var assignment = Alloy.createModel('assignment', {
	title : 'Mobile App Development', 
	author: 'Monday-Wednesday-Friday',
	
});
myassignment.add(assignment); 
assignment.save();
function openBlueWindow(e) {
    var win3 = Alloy.createController('menu').getView();
    $.navGroupWin.openWindow(win3);
}




function showAssignment(event) {
    var selectedBook = event.source;
    var args = {
        title: selectedBook.title,
        author: selectedBook.author,
        class: selectedBook.class
    };
    var assignmentview = Alloy.createController("assignmentdetails", args).getView();
    $.navGroupWin.openWindow(assignmentview);

}  
function addassignment(){
    var myAddassignment = Alloy.createController("addassignment",{}).getView();
 if (OS_IOS) {
        $.navGroupWin.openWindow(myAddassignment);
    }
 if (OS_ANDROID) {
        myAddBook.open();
    }
}
if (aUser.authenticated()) {
	// rehydrate the user
	aUser.showMe().then(function(_user) {
		userLoggedIn(_user);
	}, function(_error) {
		alert("Application Error\n " + _response.error.message);
		Ti.API.error(JSON.stringify(_response.error, null, 2));
		// go ahead and do the login
		userNotLoggedIn();
	});
} else {
	userNotLoggedIn();
}

/**
 * 
 */
function userLoggedIn(_user) {
		
	if ( !$.alreadyOpenedIndex ) {
		// start the application
		$.mainWindow.open();
		
		$.alreadyOpenedIndex = true;
	}
	
	Alloy.Globals.CURRENT_USER = _user;
	
	// set button title with name to show we are logged in
	$.logoutBtn.title = "Logout: " + _user.get("username");


	// added support for getting location from the user
	// object since it seems like a helpful feature
	_user.getCurrentLocation().then(function(_results) {
		Ti.API.debug('_results ' + JSON.stringify(_results, null, 2));
	}, function(_error) {
		Ti.API.error('_error ' + JSON.stringify(_error));
	});
	
}
/**
 *
 */
function userNotLoggedIn() {
	// display login information
	var ctrl = Alloy.createController('User', {
		callback : function(_user) {
			
			userLoggedIn(_user);
			
			// close the old window
			ctrl.getView().close();
			ctrl = nil;
		}
	});

	ctrl.getView().open();
}

/**
 * 
 */
function doLogout() {
	if (Alloy.Globals.CURRENT_USER) {
		Alloy.Globals.CURRENT_USER.logout().then(function(_model){
			Alloy.Globals.CURRENT_USER = null;
			console.log("logged out!");
			
			// display login window
			userNotLoggedIn();
			
		}, function(_error){
			alert(_error.message);
		});
	}
}

$.mainWindow.addEventListener('androidback',function(e){
    $.mainWindow.close();

    // get activity and cleanup
	$.mainWindow.activity.finish();
});
if(OS_IOS) { 
   $.navGroupWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}
