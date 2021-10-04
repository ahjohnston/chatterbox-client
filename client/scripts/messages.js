// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieve: function () {
    return this._data;
  },

  addMsg: function(string) {
    //create a new message object, and add it to Message.data
  }

  //what other methods should we implement?

  update: (data) => {
    this._data = data;
    console.log('data stored in Messages._data is now: ', this._data);
  },
  //get a list of all message
  //get a list of messages fora particular user
  retrieve: (friend) => {
    if (!friend) {
      return this._data;
    }
    //if a friend IS passed in, return only messages that were authored by that friend

  }

};