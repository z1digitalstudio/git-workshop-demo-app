const { join } = require('path');

const toFirstLowerCase = ([first, ...rest]) =>
  `${first.toLowerCase()}${rest.join('')}`;

const toFirstUpperCase = ([first, ...rest]) =>
  `${first.toUpperCase()}${rest.join('')}`;

const firstLowerCase = (word) =>
  word === toFirstLowerCase(word) || 'Must begin with a lower case letter';

module.exports = function (plop, projectSrc) {
  plop.setGenerator('query', {
    description: 'GraphQL query',
    prompts: [
      {
        type: 'input',
        name: 'entityName',
        message: 'entity name',
        validate: firstLowerCase,
      },
      {
        type: 'input',
        name: 'queryName',
        message: 'query name',
        default: ({ entityName }) => `get${toFirstUpperCase(entityName)}`,
        validate: firstLowerCase,
      },
    ],
    actions: ({ entityName, queryName }) => {
      const queryNameWithoutGet = toFirstUpperCase(
        queryName.match(/^get(.+)$/)?.[1] ?? '',
      );

      return [
        {
          type: 'add',
          path: join(
            projectSrc,
            `graphql/hooks/${entityName}/use${queryNameWithoutGet}.ts`,
          ),
          templateFile:
            'templates/query/graphql/hooks/__entity_name__/use__query_name__.ts.hbs',
          data: {
            queryNameWithoutGet,
          },
        },
        {
          type: 'add',
          path: join(
            projectSrc,
            `graphql/queries/${entityName}/${queryName}.ts`,
          ),
          templateFile:
            'templates/query/graphql/queries/__entity_name__/__query_name__.ts.hbs',
          data: {
            queryNameWithoutGet,
          },
        },
      ];
    },
  });
};
