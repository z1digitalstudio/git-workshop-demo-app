/* eslint-disable no-console */

const command = `${process.env.npm_execpath}`;

if (command.toLowerCase().includes('npm')) {
  console.error('##################################');
  console.error('#                                #');
  console.error('# Please use YARN instead of NPM #');
  console.error('#       https://yarnpkg.com      #');
  console.error('#                                #');
  console.error('##################################');
  console.error('');

  process.exit(1);
}
