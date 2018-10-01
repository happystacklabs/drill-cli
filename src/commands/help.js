const menus = {
  main: `
    drill [command] <options>

    generate .............. generate a component
    version ............ show package version
    help ............... show help menu for a command`,

  generate: `
    drill generate <options>

    --type, -t ..... the type of component to use`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
