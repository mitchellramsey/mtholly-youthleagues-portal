module.exports = function (sequelize, DataTypes) {
  var Sport = sequelize.define("Sport", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    }
  });

  Sport.associate = function (models) {
		Sport.hasMany(models.Team, {
			onDelete: "cascade"
    });
    
    Sport.hasMany(models.Kids, {
			onDelete: "cascade"
    });
    
    Sport.hasMany(models.Coach, {
			onDelete: "cascade"
		});
  };

    
  return Sport;
};