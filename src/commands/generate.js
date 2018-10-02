const ora = require('ora')
const chalk = require('chalk');
const inquirer = require('inquirer')
const _ = require('lodash')
const ui = require('../utils/ui')


module.exports = (args) => {
  // print header
  console.log(ui.header('DRILL', 'React Native CLI that know the drill 🤙'))
  console.log('')

  // 1. ask what type of component to generate from choices
  const question1 = {
    type: 'list',
    name: 'type',
    message: 'What kind of file would you like to generate?',
    choices: ['Stateless Component', 'Class Component', 'Connected Component'],
  }

  // 2. ask for the component name
  const question2 = {
    type: 'input',
    name: 'name',
    message: 'How would you like to name your file?',
    validate: (input) => input.length === 0 ? 'Cannot be blank' : true,
  }

  // 3. ask if want test to be added
  const question3 = {
    type: 'confirm',
    name: 'test',
    message: 'Do you need a test file?',
  }

  // run the questions
  inquirer
    .prompt([question1, question2, question3])
    .then(answers => {
      const name = _.capitalize(answers.name)

      console.log(`Generating ${name} ${answers.type}...`)

      switch (answers.type) {
        case 'Stateless Component':
          console.log('Stateless Component');
          break
        case 'Class Component':
          console.log('Class Component');
          break
        case 'Connected Component':
          console.log('Connected Component');
          break
        default:
          break
      }
    })



  // const spinner = ora().start()
  // console.log(args)
  // await new Promise(resolve => setTimeout(resolve, 5000))
  // spinner.stop()
  // console.log('Generate!')
}
