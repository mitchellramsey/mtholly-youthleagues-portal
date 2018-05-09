module.exports = function (sequelize, DataTypes) {
	var GamesInfo = sequelize.define("GamesInfo", {
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
		team1: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		},
		team2: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		}
	});
	return GamesInfo;
};