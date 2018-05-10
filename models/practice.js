module.exports = function (sequelize, DataTypes) {
  var Practice = sequelize.define("Practice", {
    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    team_association: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    }
  });
  return Practice;
};