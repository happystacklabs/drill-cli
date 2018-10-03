const chalk = require('chalk')
const inquirer = require('inquirer')
const _ = require('lodash')
const ejs = require('ejs')
const fs = require('fs');
const ui = require('../utils/ui')
const makeStatelessComponent = require('./subCommands/makeStatelessComponent')
const makeClassComponent = require('./subCommands/makeClassComponent')
const makeConnectedComponent = require('./subCommands/makeConnectedComponent')

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
      const { name, test } = answers;
      const nameUppercase = _.upperFirst(name)

      switch (answers.type) {
        case 'Stateless Component':
          makeStatelessComponent(nameUppercase, test)
          break
        case 'Class Component':
          makeClassComponent(nameUppercase, test)
          break
        case 'Connected Component':
          makeConnectedComponent(nameUppercase, test)
          break
        default:
          break
      }
    })


}
