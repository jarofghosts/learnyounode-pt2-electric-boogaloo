var http = require('http'),
    through = require('through')

var port = process.argv[2]

var uppercase_stream = through(to_uppercase)

http.createServer(check_response).listen(port)

function check_response(req, res) {
  if (req.method.toLowerCase() !== 'post') return res.end()
  req.pipe(uppercase_stream).pipe(res)
}

function to_uppercase(data) {
  this.queue(data.toString().toUpperCase())
}
