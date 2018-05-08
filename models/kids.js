module.exports = function (sequelize, DataTypes) {
  var Kids = sequelize.define("Kids", {
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

    age: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },

    gender: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },

    sport: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },

    years_exp: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },

    comments: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    }
  });
  return Kids;
};