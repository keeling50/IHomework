var myassignment = Alloy.Collections.assignment;
function addassignment() {
    var assignment = Alloy.createModel('assignment', {
        title : $.titleInput.value,
        author : $.authorInput.value

    });
    myassignment.add(assignment);
    assignment.save();
 // Close the window.
    $.addassignment.close();
}