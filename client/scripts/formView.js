// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    //get the message from the <form> field
    var $message = FormView.$form.find('input[id=message]'); // HTML field element
    var messageText = $message.val(); // value of the field

    //create an object, to send to API
    var messageObject = {
      username: App.username,
      text: messageText,
      //add functionality that pulls the room name
      roomname: 'no room yet'
    };

    Parse.create(messageObject, data => {
      //success callback
      App.fetch(App.stopSpinner, MessagesView.render);
      console.log('chatterbox message sent!');
    }, data => {
      //failure callback
      console.log('chatterbox failed to send message. you are also a failure');
    });

    // Remove the text in the text box
    // HTML element
    $message.val('');
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};


// clear text box after clicking submit