const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

// Only define the model if it doesn't exist
module.exports = mongoose.models.Student || mongoose.model('Student', studentSchema);
