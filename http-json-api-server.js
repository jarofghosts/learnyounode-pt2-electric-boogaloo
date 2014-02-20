var http = require('http'),
    url_parser = require('url').parse

var port = process.argv[2]

var routes = {
  '/api/parsetime': parse_time,
  '/api/unixtime': unix_time
}

http.createServer(route).listen(port)

function route(req, res) {
  var request = url_parser(req.url, true)

  if (!routes[request.pathname]) return res.writeHead(404).end()
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(
    JSON.stringify(routes[request.pathname](new Date(request.query.iso)))
  )
}

function unix_time(date) {
  return { unixtime: +date }
}

function parse_time(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}
