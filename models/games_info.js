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
		opponent: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		}

	});

	GamesInfo.associate = models => {
		GamesInfo.belongsTo(models.Team, {
			onDelete: "cascade"
		});

		// GamesInfo.hasMany(models.Team, {
		// 	onDelete: "cascade"
		//   });
	}
	
	
	return GamesInfo;
};