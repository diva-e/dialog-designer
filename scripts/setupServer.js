const basicAuth = require('express-basic-auth');
const queryString = require('query-string');

const setupServer = (app) => {

  const basicAuthUserPass = process.argv.BASIC_AUTH_USER_PASS;

  if (basicAuthUserPass) {
    const users = queryString.parse(basicAuthUserPass);

    const config = {
      users,
      unauthorizedResponse: '<h1>Unauthorized [401]</h1>',
      challenge: true,
      realm: 'dnd-dialogs',
    };

    app.use(basicAuth(config));
  }
};

module.exports = setupServer;
