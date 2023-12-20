import connectDB from '../../utils/dbConnect';
import Student from '../../models/Student';

const handler = async (req, res) => {
  await connectDB();

  const { id } = req.query;

  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json([student]);
  } catch (error) {
    console.error('Error searching data:', error.message);
    res.status(500).json({ error: 'Error searching data' });
  }
};

export default handler;
