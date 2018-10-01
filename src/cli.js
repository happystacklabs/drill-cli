const minimist = require('minimist')

module.exports = () => {
  // get the arguments
  const args = minimist(process.argv.slice(2))

  // get the command or default to help
  let cmd = args._[0] || 'help'

  // set command as version when passed
  if (args.version || args.v) {
    cmd = 'version'
  }

  // set command as help when passed
  if (args.help || args.h) {
    cmd = 'help'
  }

  // menu choices
  switch (cmd) {
    case 'generate':
      require('./commands/generate')(args)
      break
    case 'version':
      require('./commands/version')(args)
      break
    case 'help':
      require('./commands/help')(args)
      break
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}
