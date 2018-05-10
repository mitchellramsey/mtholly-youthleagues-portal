module.exports = function (sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 5000]
      }
    }
  });

  Parent.associate = function (models) {
		Parent.hasMany(models.Kids, {
			onDelete: "cascade"
		});
  };

  return Parent;
};