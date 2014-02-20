console.log(process.argv.slice(2).reduce(sum))

function sum(a, b) {
  return +a + +b
}
