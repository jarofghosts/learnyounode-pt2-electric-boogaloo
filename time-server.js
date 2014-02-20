var net = require('net')

var port = process.argv[2]

net.createServer(echo_time).listen(port)

function echo_time(socket) {
  var now = new Date,
      str = ''

  str += now.getFullYear() + '-'
  str += pad(now.getMonth() + 1) + '-'
  str += pad(now.getDate()) + ' '
  str += pad(now.getHours()) + ':'
  str += pad(now.getMinutes()) + '\n'

  socket.end(str)
}

function pad(num) {
  return ('00' + num).slice(-2)
}
