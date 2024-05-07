let socket = new WebSocket('wss://javascript.info');

socket.onopen = function (e) {
  alert('[open] Connection established');
  alert('Sending to server');
  socket.send('My name is John');
};

socket.onmessage = function (event) {
  alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.reason}`);
  } else {
    alert('[close] Connection died');
  }
};

socket.onerror = function (error) {
  alert(`[error]: ${error}`);
};
