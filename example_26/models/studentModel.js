const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  image_name: String,
});

const StudentModel = mongoose.models.Student || mongoose.model('Student', studentSchema);

module.exports = StudentModel;
