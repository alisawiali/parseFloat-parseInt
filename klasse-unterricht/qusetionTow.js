console.clear()
const resd = require( 'readline')

const ri = resd.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

/**
 *
 * @param  resd.Interface} readlineInterface
 * @param {string} msg
 */

function output (readlineInterface, msg) {
  readlineInterface.setPrompt(msg + '\n')
  readlineInterface.prompt()
}
output(ri, 'Insert help to show functions! ')

ri.on('line', input => {
  console.log('Input was ' + input)
  const inTrimmed = input.trim().toLowerCase()
  if (inTrimmed === 'help') {
    output(ri, 'Insert exit to stop the running porgram')
  } else if (inTrimmed === 'exit') {
    ri.close()
  } else if (inTrimmed === '42') {
    output(ri, 'Sory hello to MAvein')
  }
})
