import connectDB from '../../utils/dbConnect';
import StudentModel from '../../models/studentModel';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const students = await StudentModel.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch students' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
