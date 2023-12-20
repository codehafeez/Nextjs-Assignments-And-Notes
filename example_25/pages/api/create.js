import connectDB from '../../utils/dbConnect';
import Student from '../../models/Student';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    try {
      const { name, age } = req.body;
      const student = new Student({ name, age });
      const savedStudent = await student.save();
      res.status(201).json(savedStudent);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create student' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
