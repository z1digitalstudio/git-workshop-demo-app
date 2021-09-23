const { singularize } = require('inflection');
const camelCase = require('lodash/camelCase');
const compose = require('lodash/fp/compose');
const startCase = require('lodash/startCase');
const { join } = require('path');

const toFirstUpperCase = ([first, ...rest]) =>
  `${first.toUpperCase()}${rest.join('')}`;

const upperCamelCase = compose(toFirstUpperCase, camelCase);

function getParts(url) {
  const parts = url.split('/').filter((it) => !!it);
  const firstParts = parts.slice(0, -1);
  const lastPart = parts[parts.length - 1];

  return { firstParts, lastPart };
}

module.exports = function (plop, projectSrc) {
  plop.setGenerator('page', {
    description: 'Next.js Page',
    prompts: [
      {
        type: 'input',
        name: 'url',
        message: 'url',
        validate: (input) => {
          if (input[0] !== '/') {
            return "The url must start with a slash '/'";
          }

          return true;
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'page name',
        default: ({ url }) => {
          const { firstParts, lastPart } = getParts(url);

          if (!!lastPart.match(/^\[.+]$/)) {
            // We're on a detail page, so take the last relevant part
            return startCase(singularize(firstParts[firstParts.length - 1]));
          }

          return startCase(lastPart);
        },
      },
    ],
    actions: ({ url }) => {
      const { firstParts, lastPart } = getParts(url);

      const containerPath = join(
        'containers/Views',
        ...[...firstParts, lastPart].map((part, i, parts) => {
          if (!!part.match(/^\[.+]$/)) {
            // We're on a detail page, so take the previous part
            return startCase(singularize(parts[i - 1] ?? 'Detail'));
          }

          return upperCamelCase(part);
        }),
      );

      return [
        {
          type: 'add',
          path: join(projectSrc, 'pages', ...firstParts, lastPart, 'index.tsx'),
          templateFile: 'templates/page/pages/page.tsx.hbs',
          data: {
            containerPath,
          },
        },
        {
          type: 'add',
          path: join(projectSrc, containerPath, 'index.tsx'),
          templateFile:
            'templates/page/containers/Views/__Page__/index.tsx.hbs',
        },
        {
          type: 'add',
          path: join(projectSrc, containerPath, 'styles.ts'),
          templateFile:
            'templates/page/containers/Views/__Page__/styles.ts.hbs',
        },
      ];
    },
  });
};
