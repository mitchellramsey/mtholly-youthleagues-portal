module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
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
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [0, 50]
        }
      },
      zip: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [0, 20]
        }
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [0, 50]
        }
      },
      state: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [0, 50]
        }
      },
      county: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [0, 50]
        }
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [0, 50]
        }
      }
    });
    return Users;
}