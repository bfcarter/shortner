module.exports = function makeModel(sequelize, DataTypes) {
  // below is what is required to create the short url, what must be input
  const shortUrl = sequelize.define('shortUrl', {
    id: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
      primaryKey: true,
    },
    realUrl: {
      type: DataTypes.STRING,
      required: true,
    },
  });

  return shortUrl;
};
