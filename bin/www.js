const app = require('../');
const models = require('../models/');

models.sequelize.sync().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log('Application is listening on port ' + port);
  });
});
