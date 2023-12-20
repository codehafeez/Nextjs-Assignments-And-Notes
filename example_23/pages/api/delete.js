import connectDB from '../../utils/dbConnect';
import Student from '../../models/Student';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;
      await Student.findByIdAndDelete(id);
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to delete student' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
