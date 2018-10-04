//Example Model using Sequelize  
module.exports = function(sequelize, DataTypes){
  let User = sequelize.define("User", {
      name: DataTypes.STRING,
      password: DataTypes.STRING
  });
  return User;
}
