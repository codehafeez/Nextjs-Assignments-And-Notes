import connectDB from '../../utils/dbConnect';
import Student from '../../models/Student';

const handler = async (req, res) => {
  await connectDB();

  const { name, age } = req.query;
  try {
    const searchResults = await Student.searchStudents(name, parseInt(age));
    res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error searching data:', error.message);
    res.status(500).json({ error: 'Error searching data' });
  }
};

export default handler;
