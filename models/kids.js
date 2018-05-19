module.exports = function (sequelize, DataTypes) {
  var Kids = sequelize.define("Kids", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },

    years_exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [0, 100]
      }
    },

    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },

    paidFor: {
      type: DataTypes.BOOLEAN
    }
  });

  Kids.associate = models => {
    Kids.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });

    Kids.belongsTo(models.Sport, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Kids;
};