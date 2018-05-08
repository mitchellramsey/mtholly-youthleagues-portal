module.exports = function (sequelize, DataTypes) {
  var Sport = sequelize.define("Sport", {
    name: {
      type: DataType.TEXT,
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
  };
    
  return Sport;
};