const ora = require('ora')
const chalk = require('chalk');
const ui = require('../utils/ui')


module.exports = (args) => {
  // print header
  console.log(ui.header('DRILL', 'React Native CLI that know the drill 🤙'))
  // A. if no args start the guided process
  if (args._.length === 1) {
    // 1. ask what type of component to generate from choices
    const msg1 = chalk.hex('#FFFFFF')('\n  What kind of component would you like to generate?')
    const msg2 = chalk.hex('#585858')(' (Use arrow keys)\n')
    console.log(msg1 + msg2)
    // 2. ask for the component name
    // 3. ask if want test to be added
    // 4. show preview and ask for confirmation
  }




  // const spinner = ora().start()
  // console.log(args)
  // await new Promise(resolve => setTimeout(resolve, 5000))
  // spinner.stop()
  // console.log('Generate!')
}
