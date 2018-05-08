module.exports = function (sequelize, DataTypes) {
	var GamesInfo = sequelize.define("GamesInfo", {
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
		team1: {
			type: DataType.TEXT,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		},
		team2: {
			type: DataType.TEXT,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		}
	});
	return GamesInfo;
};