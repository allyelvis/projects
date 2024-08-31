module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING,
    },
  });
  return Student;
};
