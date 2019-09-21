/* global location, WebSocket */
var host = location.origin.replace(/^http/, 'ws')
var client = new WebSocket(host)

var textbox = document.getElementsByTagName('input')[0]
var button = document.getElementsByTagName('button')[0]

// give a user a random name,
textbox.defaultValue = RandomNames.generate(1)[0];

var ping_timer;

client.onmessage = function (message) {
  if (message.data === 'loginSuccess') {
    button.innerHTML = 'Send'
    textbox.placeholder = 'Write message'
    textbox.parentElement.className += ' has-success'
    // also start 10s ping timer to keep this client alive while Idle
    ping_timer = setInterval(onPingTime, 10000);
    return
  } else if (message.data === 'loginFailed') {
    textbox.parentElement.className += ' has-error'
    textbox.placeholder = 'Username is already used by another user'
    return
  }

  var chatbox = document.getElementById('chatbox')
  var div = document.createElement('div')
  div.className = 'col-xs-12 nopadding'
  div.innerHTML = '<span class="col-xs-11 nopadding">' +
    message.data.replace(/(@\w+)/ig, '<b>$1</b>') +
    '</span><span class="col-xs-1 text-right nopadding">' +
    new Date().toTimeString().split(' ')[0] + '</span>'

  chatbox.appendChild(div)
  chatbox.scrollTop = chatbox.scrollHeight
}

function send () {
  
  if (!textbox.value) return

  var message = {
    type: 'message',
    data: textbox.value
  }

  if (button.innerHTML === 'Login') {
    message.type = 'login'
  }

  client.send(JSON.stringify(message))
  textbox.value = ''
}

function onPingTime() {
  var message = {
    type: 'ping',
    data: ''
  }

  client.send(JSON.stringify(message))
}

button.onclick = send

textbox.onkeypress = function (event) {
  if (event.charCode === 13) send()
}
