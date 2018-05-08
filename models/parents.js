module.exports = function (sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
    first_name: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    last_name: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    address: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    city: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    state: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    zip: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },
    phone: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },
    email: {
      type: DataType.TEXT,
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