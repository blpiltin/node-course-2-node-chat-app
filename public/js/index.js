var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (msg) {
  var fmtTime = moment(msg.createdAt).format('h:mm a');
  var li = $('<li></li>');
  li.text(`${msg.from} ${fmtTime}: ${msg.text}`);

  $('#messages').append(li);
});

socket.on('newLocationMessage', function (msg) {
  var fmtTime = moment(msg.createdAt).format('h:mm a');
  var li = $('<li></li>');
  var a = $('<a target="_blank">My current location</a>');

  li.text(`${msg.from} ${fmtTime}: `);
  a.attr('href', msg.url);
  li.append(a);

  $('#messages').append(li);
});

$('#message-form').on('submit', function (event) {
  event.preventDefault();

  var messageTextbox = $('[name=message]');

  socket.emit('createMessage', {
    from: 'User',
    text: messageTextbox.val()
  }, function () {
    messageTextbox.val('');
  });
});

var locationButton = $('#send-location');
locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  locationButton.attr('disabled', 'disabled').text('Sending...');

  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send Location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function () {
    locationButton.removeAttr('disabled').text('Send Location');
    alert('Unable to fetch location.');
  });
});