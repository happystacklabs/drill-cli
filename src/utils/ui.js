const chalk = require('chalk');

const header = (title, description) => `
    /\\═════════\\™
   /__\\‸_____/__\\‸   ${chalk.hex('#5F6DC5')(title)}
  │    │         │   ${description}
  │    │  \\___/  │
  ╰────┴─────────╯`;

module.exports = {
  f: {
    t: `${chalk.hex('#585858')('╭──────────────────────────────────────────────────────────────╮')}`,
    b: `${chalk.hex('#585858')('╰──────────────────────────────────────────────────────────────╯')}`,
    e: `${chalk.hex('#585858')('│                                                              │')}`,
    r: `${chalk.hex('#585858')('├──────────────────────────────────────────────────────────────┤')}`,
    s: `${chalk.hex('#585858')('│')}`,
  },
  c: {
    purple: (content) => `${chalk.hex('#5F6DC5')(content)}`,
    white: (content) => `${chalk.hex('#FFFFCF')(content)}`,
  },
  header,
}
