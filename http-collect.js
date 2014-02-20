var http = require('http'),
    concat = require('concat-stream')

http.get(process.argv[2], pipe_res)
  
function pipe_res(res) {
  res.setEncoding('utf8')
  res.pipe(concat(print_info))
}

function print_info(data) {
  console.log(data.length)
  console.log(data)
}
