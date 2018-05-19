module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
      teamName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [0, 100]
        }
      },

    });

    Team.associate = function (models) {
      Team.hasMany(models.Coach, {
        onDelete: "cascade"
      });

      Team.belongsTo(models.Sport, {
        foreignKey: {
          allowNull: false
        }
      });
  
      Team.hasMany(models.GamesInfo, {
        onDelete: "cascade"
      });
      
      Team.hasMany(models.Kids, {
        onDelete: "cascade"
      })
    };
    
    return Team;
  };