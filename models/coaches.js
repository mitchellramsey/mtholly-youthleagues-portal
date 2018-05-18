module.exports = function (sequelize, Datatypes) {
	var Coach = sequelize.define("Coach", {
		first_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		},
		last_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		},
		password: {
			type: Datatypes.TEXT,
			allowNull: false
		},
		address: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		},
		city: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		},
		state: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		},
		zip: {
			type: Datatypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: true,
				len: [0, 100]
			}
		},
		phone: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				isInt: true,
				len: [0, 255]
			}
		},
		email: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [0, 100]
			}
		},
		comments: {
			type: Datatypes.TEXT,
			allowNull: true,
			validate: {
				len: [0, 5000]
			}
		}
	});

	Coach.associate = function (models) {
		Coach.hasMany(models.Users, {
			onDelete: "cascade"
		});

		Coach.hasMany(models.Kids, {
			onDelete: "cascade"
		});

		Coach.hasMany(models.Practice, {
			onDelete: "cascade"
		});

		Coach.belongsTo(models.Sport, {
			foreignKey: {
				allowNull: false
			}
		});

		Coach.belongsTo(models.Team, {
			
		});
	};

	return Coach;
};