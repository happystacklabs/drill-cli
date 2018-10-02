const chalk = require('chalk');

const header = (title, description) => `
    /\\═════════\\™
   /__\\‸_____/__\\‸   ${chalk.hex('#5F6DC5')(title)}
  │    │         │   ${description}
  │    │  \\___/  │
  ╰────┴─────────╯`;

module.exports = {
  f: {
    t: `${chalk.dim('╭──────────────────────────────────────────────────────────────╮')}`,
    b: `${chalk.dim('╰──────────────────────────────────────────────────────────────╯')}`,
    e: `${chalk.dim('│                                                              │')}`,
    r: `${chalk.dim('├──────────────────────────────────────────────────────────────┤')}`,
    s: `${chalk.dim('│')}`,
  },
  c: {
    p: (content) => `${chalk.hex('#5F6DC5')(content)}`,
    w: (content) => `${chalk.bold(content)}`,
  },
  header,
}
