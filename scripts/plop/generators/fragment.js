const { join } = require('path');

const firstLowerCase = ([first]) =>
  first === first.toLowerCase() ||
  'The entity name must begin with a lower case letter';

const toFirstUpperCase = ([first, ...rest]) =>
  `${first.toUpperCase()}${rest.join('')}`;

module.exports = function (plop, projectSrc) {
  plop.setGenerator('fragment', {
    description: 'GraphQL Fragment',
    prompts: [
      {
        type: 'input',
        name: 'entityName',
        message: 'entity name',
        validate: firstLowerCase,
      },
    ],
    actions: ({ entityName }) => [
      {
        type: 'add',
        path: join(
          projectSrc,
          `graphql/fragments/${toFirstUpperCase(entityName)}.ts`,
        ),
        templateFile:
          'templates/fragment/graphql/fragments/__entity_name__.ts.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, `model/${toFirstUpperCase(entityName)}.ts`),
        templateFile: 'templates/fragment/model/__entity_name__.ts.hbs',
      },
    ],
  });
};
