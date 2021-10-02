// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  //_.template returns a function. that means render is itself a function
  //render will take an input of a message object (called in messagesView.renderMessages)
  render: _.template(`

      <div class="chat">
        <div class="username"> <%= username %> </div>
        <div> <%= text %> </div>
      </div>

    `)

};

//template syntax:    <%= [object key] %>

/*

campus: "hr-sfo"
created_at: "2021-10-02T17:37:08.498Z"
github_handle: "AdamPJohnson"
message_id: 36290
roomname: "heavens drip"
text: "That was me for some reason I was back on anonymous :/"
updated_at: "2021-10-02T17:37:08.498Z"
username: "David Deaton"


*/