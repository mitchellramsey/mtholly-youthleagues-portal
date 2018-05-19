module.exports = function (sequelize, DataTypes) {
  var Admin = sequelize.define("Admin", {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 50]
      }
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 50]
      }
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    }
  });

  return Admin;
}