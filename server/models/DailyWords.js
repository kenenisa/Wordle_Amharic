module.exports = function (sequelize, DataTypes) {
  return sequelize.define("DailyWords", {
    // Model attributes are defined here
    word: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    col: {
      type: DataTypes.STRING,
    },
  });
};
