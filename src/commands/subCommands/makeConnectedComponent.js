const ejs = require('ejs')
const chalk = require('chalk')
const fs = require('fs');
const ui = require('../../utils/ui')

const CURR_DIR = process.cwd()

module.exports = (name, haveTest) => {
  // rendering
  console.log(chalk.dim(`🖍   Rendering connected component from template`))
  const templatePath = `${__dirname}/../../templates/ConnectedComponent.js.ejs`;
  componentContent = ejs.render(fs.readFileSync(templatePath, 'utf8'), { name })

  // write file
  console.log(chalk.dim(`🚚  Write ${ui.c.p(name+'.js')} to current directory`))
  fs.writeFileSync(`${CURR_DIR}/${name}.js`, componentContent)

  // rendering test
  if (haveTest) {
    console.log(chalk.dim(`🖍   Rendering test from template`))
    const testTemplatePath = `${__dirname}/../../templates/ConnectedComponent.test.js.ejs`;
    testContent = ejs.render(fs.readFileSync(testTemplatePath, 'utf8'), { name })

    // write file
    console.log(chalk.dim(`🚚  Write ${ui.c.p(name+'.test.js')} to current directory`))
    try {
       fs.mkdirSync(`${CURR_DIR}/__tests__/`)
    } catch(e) {}
    fs.writeFileSync(`${CURR_DIR}/__tests__/${name}.test.js`, testContent)
  }

  // done
  console.log(ui.c.p(`\n🏁  Finished generation ${name} connected component!`))
}
