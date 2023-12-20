import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

// Add a function to perform a search based on name and age
Student.searchStudents = async (name, age) => {
  try {
    const query = {};

    if (name) {
      query.name = new RegExp(name, 'i'); // Case-insensitive search for the name
    }

    if (age) {
      query.age = age; // Search by age
    }

    const results = await Student.find(query);
    return results;
  } catch (error) {
    throw new Error('Error searching students:', error.message);
  }
};

export default Student;
