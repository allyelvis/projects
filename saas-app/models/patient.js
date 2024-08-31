module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    medicalHistory: {
      type: DataTypes.TEXT,
    },
  });
  return Patient;
};
