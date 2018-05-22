module.exports = function (sequelize, DataTypes) {
	var GamesInfo = sequelize.define("GamesInfo", {
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
		team1: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		},
		team2: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		}
	});

	GamesInfo.associate = models => {
		GamesInfo.belongsToMany(models.Team, { through: 'games' });

		// GamesInfo.hasMany(models.Team, {
		// 	onDelete: "cascade"
		//   });
	}
	
	  
	return GamesInfo;
};