module.exports = function (sequelize, DataTypes) {
  var Practice = sequelize.define("Practice", {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    team_association: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    }
  });
  return Practice;
};