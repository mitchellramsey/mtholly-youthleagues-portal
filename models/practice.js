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
        len: [0, 100]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    }
    
  });

  Practice.associate = models => {
    Practice.belongsTo(models.Team, {
			foreignKey: {
				allowNull: false
			}
		});
  }
  return Practice;
};