const promptDirectory = require('inquirer-directory');
const { join } = require('path');

const projectSrc = join(__dirname, '../../src');

module.exports = function runPlop(plop) {
  plop.setPrompt('directory', promptDirectory);

  require('./helpers/upperSnakeCase')(plop);

  require('./generators/component')(plop, projectSrc);
  require('./generators/fragment')(plop, projectSrc);
  require('./generators/mutation')(plop, projectSrc);
  require('./generators/page')(plop, projectSrc);
  require('./generators/query')(plop, projectSrc);
};
