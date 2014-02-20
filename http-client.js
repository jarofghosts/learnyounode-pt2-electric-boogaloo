var http = require('http')

http.get(process.argv[2], print_response)

function print_response(res) {
  res.setEncoding('utf8')
  res.on('data', console.log)
}
