function closeWindow(){
    $.win3.close();
}

$.calbutton.addEventListener('click', function(e) {
  calendar = Alloy.createController('calendar');
  // Since the controller calls the open() function, nothing
  // else is needed here
})

$.assbutton.addEventListener('click', function(e) {
  assignment = Alloy.createController('assignment');
  // Since the controller calls the open() function, nothing
  // else is needed here
})


$.notebutton.addEventListener('click', function(e) {
  notes = Alloy.createController('notes');
  // Since the controller calls the open() function, nothing
  // else is needed here
})