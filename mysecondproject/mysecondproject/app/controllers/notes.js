$.notesWindow.open();
var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var textArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  value: 'Notes',
  top: 30,
  width: 300, height : 470
});
var button = Titanium.UI.createButton({
   title: 'Save',
   bottom: 10,
   width: 100,
   height: 50
});
button.addEventListener('click',function(e)
{
   Titanium.API.info("Saved the Note");
});
win.add(textArea);
win.add(button);
win.open();
