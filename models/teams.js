module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
      sport: {
        type: DataType.TEXT,
        allowNull: false,
        validate: {
          len: [0, 100]
        }
      },
      coaches: {
        type: DataType.TEXT,
        allowNull: false,
        validate: {
          len: [0, 100]
        }
      },
      kids: {
        type: DataType.TEXT,
        allowNull: false,
        validate: {
          len: [0, 100]
        }
      }
    });
    return Team;
  };