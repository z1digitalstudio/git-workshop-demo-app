const { join } = require('path');

const toFirstLowerCase = ([first, ...rest]) =>
  `${first.toLowerCase()}${rest.join('')}`;

const toFirstUpperCase = ([first, ...rest]) =>
  `${first.toUpperCase()}${rest.join('')}`;

const firstLowerCase = (word) =>
  word === toFirstLowerCase(word) || 'Must begin with a lower case letter';

module.exports = function (plop, projectSrc) {
  plop.setGenerator('mutation', {
    description: 'GraphQL mutation',
    prompts: [
      {
        type: 'input',
        name: 'entityName',
        message: 'entity name',
        validate: firstLowerCase,
      },
      {
        type: 'input',
        name: 'mutationName',
        message: 'mutation name',
        default: ({ entityName }) => `create${toFirstUpperCase(entityName)}`,
        validate: firstLowerCase,
      },
      {
        type: 'input',
        name: 'actionName',
        message: 'action name',
        default: ({ entityName, mutationName }) =>
          mutationName.replace(toFirstUpperCase(entityName), ''),
        validate: firstLowerCase,
      },
    ],
    actions: ({ entityName, mutationName }) => [
      {
        type: 'add',
        path: join(
          projectSrc,
          `graphql/hooks/${entityName}/use${toFirstUpperCase(
            entityName,
          )}Actions.ts`,
        ),
        templateFile:
          'templates/mutation/graphql/hooks/__entity_name__/use__entity_name__Actions.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: join(
          projectSrc,
          `graphql/mutations/${entityName}/${mutationName}.ts`,
        ),
        templateFile:
          'templates/mutation/graphql/mutations/__entity_name__/__mutation_name__.ts.hbs',
      },
    ],
  });
};
