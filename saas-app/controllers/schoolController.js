const db = require('../models');

exports.getStudents = async (req, res) => {
  const students = await db.Student.findAll();
  res.json(students);
};

exports.addStudent = async (req, res) => {
  const student = await db.Student.create(req.body);
  res.json(student);
};
