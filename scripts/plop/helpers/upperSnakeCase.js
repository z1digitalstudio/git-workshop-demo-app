const compose = require('lodash/fp/compose');
const snakeCase = require('lodash/snakeCase');

module.exports = function (plop) {
  plop.setHelper(
    'upperSnakeCase',
    compose((word) => word.toUpperCase(), snakeCase),
  );
};
