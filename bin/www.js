const app = require('../');
const models = require('../models/');

models.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Application is listening on port 3000');
  });
});
