const chalk = require('chalk');
const ui = require('../utils/ui')

const main = `
  ${ui.header('DRILL', 'React Native CLI that know the drill 🤙')}
  ${ui.f.t}
  ${ui.f.e}
  ${ui.f.s}  ${chalk.hex('#FFFFFF')('🕹 USAGE')}                                                     ${ui.f.s}
  ${ui.f.s}  $ drill [COMMAND]                                           ${ui.f.s}
  ${ui.f.e}
  ${ui.f.r}
  ${ui.f.e}
  ${ui.f.s}  ${ui.c.white('💾 COMMANDS')}                                                 ${ui.f.s}
  ${ui.f.s}  ${ui.c.purple('generate (g)')}        generate a component                    ${ui.f.s}
  ${ui.f.s}  ${ui.c.purple('version')}             show package version                    ${ui.f.s}
  ${ui.f.s}  ${ui.c.purple('help')}                show help menu for a command            ${ui.f.s}
  ${ui.f.e}
  ${ui.f.b}
`

const generate = `
  ${ui.header('DRILL', 'React Native CLI that know the drill 🤙')}
  ${ui.f.t}
  ${ui.f.e}
  ${ui.f.s}  ${chalk.hex('#FFFFFF')('🕹 USAGE')}                                                     ${ui.f.s}
  ${ui.f.s}  $ drill generate <options>                                  ${ui.f.s}
  ${ui.f.e}
  ${ui.f.r}
  ${ui.f.e}
  ${ui.f.s}  ${ui.c.white('🎛  OPTIONS')}                                                  ${ui.f.s}
  ${ui.f.s}  ${ui.c.purple('--type, -t')}          the type of component to use            ${ui.f.s}
  ${ui.f.e}
  ${ui.f.b}
`

const menus = {
  main,
  generate,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
