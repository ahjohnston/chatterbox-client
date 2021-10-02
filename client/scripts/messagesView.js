// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function(friend) {
    // clear the #chats
    MessagesView.$chats.empty();
    // TODO: Render _all_ the messages.
    //reference the current database of messages
    var messages = Messages.retrieve(friend);

    console.log('data retrieved from Messages.retrieve() : ', messages);

    //iterate through the messages, and pass each one through renderMessage
    messages.forEach( (message) => {
      MessagesView.renderMessage(message);
    });

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //pass the message through the template (turns the message object into a DOM element)
    var $message = MessageView.render(message);

    //add the DOM-friendly message to chat element
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};