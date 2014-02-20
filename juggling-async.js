var http = require('http'),
    concat = require('concat-stream')

var completed = 0,
    results = []

for (var i = 0; i < 3; ++i) {
  do_get(process.argv[2 + i], i)
}

function do_get(url, slot) {
  http.get(url, setup_concat)

  function setup_concat(res) {
    res.setEncoding('utf8')
    res.pipe(concat(insert_into_slot))
  }

  function insert_into_slot(data) {
    results[slot] = data
    ++completed === 3 && print_results()
  }
}

function print_results() {
  console.log(results.join('\n'))
}
