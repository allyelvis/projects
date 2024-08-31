module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    patientId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Patients',
        key: 'id',
      },
    },
    doctor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Appointment;
};
