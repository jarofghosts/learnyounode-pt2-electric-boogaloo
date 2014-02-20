var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', count_lines)

function count_lines(err, data) {
  console.log(data.match(/\n/g).length)
}
