var http = require('http'),
    fs = require('fs')

var port = process.argv[2],
    file = process.argv[3]

http.createServer(serve_file).listen(port)

function serve_file(req, res) {
  fs.createReadStream(file).pipe(res)
}
