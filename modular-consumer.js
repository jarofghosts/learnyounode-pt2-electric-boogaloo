var filter_ls = require('./modular-module')

filter_ls(process.argv[2], process.argv[3], print_data)

function print_data(err, data) {
  if (err) return console.log('ruh roh: ', err)

  console.log(data.join('\n'))
}
