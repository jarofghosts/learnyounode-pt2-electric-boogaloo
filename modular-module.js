var fs = require('fs'),
    path = require('path')

module.exports = filter_ls

function filter_ls(dir, extension, cb) {
  extension = '.' + extension

  fs.readdir(dir, filter_files)

  function filter_files(err, files) {
    if (err) return cb(err)

    cb(null, files.filter(match_extension))
  }

  function match_extension(filename) {
    return path.extname(filename) === extension
  }
}
