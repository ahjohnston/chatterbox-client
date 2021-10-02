// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  update: (data) => {
    // iterate through the data
    // // for each object element, access the roomname key and add it to our Rooms._data
    for (var message of data) {
      Rooms._data.add(message.roomname);
    }

  }




};