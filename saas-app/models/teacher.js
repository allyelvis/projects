module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
    },
  });
  return Teacher;
};
