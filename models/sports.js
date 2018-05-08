module.exports = function (sequelize, DataTypes) {
  var Sport = sequelize.define("Sport", {
    name: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    }
  });
  return Sport;
};