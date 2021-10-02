// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    // FormView.initialize();
    // RoomsView.initialize();
    // MessagesView.initialize();

    // Fetch initial batch of messages

    App.fetch(App.stopSpinner, FormView.initialize, RoomsView.initialize, MessagesView.initialize);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },
  //TODO: figure out how to use a default parameter with a ... rest parameter
  fetch: function (...callbacks) {
    App.startSpinner();
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('data from the server is: ', data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      //update Messages._data with the data from calling readAll
      Messages.update(data);

      //execute the callbacks as soon as the asynchronous stuff is done
      //spinner has to wait to "stop" until all data has been fetched

      for (var callback of callbacks) {
        callback();
      }

    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};