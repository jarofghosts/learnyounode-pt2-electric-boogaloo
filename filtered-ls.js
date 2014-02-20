var fs = require('fs'),
    path = require('path')

var dir = process.argv[2],
    extension = '.' + process.argv[3]

fs.readdir(dir, filter_files)

function filter_files(err, files) {
  console.log(files.filter(match_extension).join('\n'))
}

function match_extension(filename) {
  return path.extname(filename) === extension
}
