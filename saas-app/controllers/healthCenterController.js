const db = require('../models');

exports.getPatients = async (req, res) => {
  const patients = await db.Patient.findAll();
  res.json(patients);
};

exports.addPatient = async (req, res) => {
  const patient = await db.Patient.create(req.body);
  res.json(patient);
};
