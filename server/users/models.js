module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fbid: DataTypes.INTEGER,
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    fbprofile: DataTypes.STRING,
    reputation: DataTypes.INTEGER,
    reviews: DataTypes.INTEGER,
    beebucks: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    street: DataTypes.STRING,
    country: DataTypes.STRING
  });
}
