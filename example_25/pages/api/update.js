import connectDB from '../../utils/dbConnect';
import Student from '../../models/Student';

const handler = async (req, res) => {
  await connectDB();

  const { id } = req.query;
  const { name, age } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, age },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ success: false, error: 'Student not found' });
    }

    res.status(200).json({ success: true, data: updatedStudent });
  } catch (error) {
    console.error('Error updating data:', error.message);
    res.status(500).json({ success: false, error: 'Error updating data' });
  }
};

export default handler;
