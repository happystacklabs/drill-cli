const ora = require('ora')

module.exports = async (args) => {
  const spinner = ora().start()
  await new Promise(resolve => setTimeout(resolve, 5000))
  spinner.stop()
  console.log('Generate!')
}
