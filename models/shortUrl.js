module.exports = function makeModel(sequelize, DataTypes) {
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
