

module.exports = function(sequelize, DataTypes) {
    let Profiles = sequelize.define("Profiles", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        monthOfBirth: DataTypes.INTEGER,
        dayOfBirth: DataTypes.INTEGER,
        yearOfBirth: DataTypes.INTEGER,
    });
    return Profiles;
}