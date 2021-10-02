// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
  },

  render: function () {
    // TODO: Render out the list of rooms.
    // take each element from our Rooms_data set and pass to renderRoom

    for (var room of Rooms.retrieve()) {
      RoomsView.renderRoom(room);
    }

  },

  renderRoom: function (roomname) {
    // TODO: Render out a single room.
    // turn it into an html element
    $room = (`<option value="${roomname}">${roomname}</option>`);
    // append to select element

    RoomsView.$select.append($room);
  },

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function (event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
