const minimist = require('minimist')
const error = require('./utils/error')

module.exports = () => {
  // get the arguments
  const args = minimist(process.argv.slice(2))

  // get the command or default to help
  let cmd = args._[0] || 'help'

  // menu choices
  switch (cmd) {
    case 'generate':
    case 'g':
      require('./commands/generate')(args)
      break
    case 'version':
    case 'v':
      require('./commands/version')(args)
      break
    case 'help':
    case 'h':
      require('./commands/help')(args)
      break
    default:
      error(`"${cmd}" is not a valid command!`, true)
      break
  }
}
