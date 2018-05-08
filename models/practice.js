module.exports = function (sequelize, DataTypes) {
  var Practice = sequelize.define("Practice", {
    date: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    time: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },
    location: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    team_association: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    }
  });
  return Practice;
};