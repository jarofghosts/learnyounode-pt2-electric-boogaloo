var fs = require('fs')

var file_contents = fs.readFileSync(process.argv[2], { encoding: 'utf8' })
console.log(file_contents.match(/\n/g).length)
