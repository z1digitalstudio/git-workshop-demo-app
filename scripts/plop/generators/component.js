const { join } = require('path');

const firstUpperCase = ([first]) =>
  first === first.toUpperCase() ||
  'The name must begin with an upper case letter';

module.exports = function (plop, projectSrc) {
  plop.setGenerator('component', {
    description: 'React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        validate: firstUpperCase,
      },
      {
        type: 'directory',
        name: 'path',
        message: 'component path',
        basePath: join(projectSrc, 'components'),
      },
    ],
    actions: () => [
      {
        type: 'add',
        path: join(projectSrc, 'components/{{path}}/{{name}}/index.tsx'),
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'components/{{path}}/{{name}}/styles.ts'),
        templateFile: 'templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'components/{{path}}/{{name}}/types.ts'),
        templateFile: 'templates/component/types.ts.hbs',
      },
    ],
  });
};
