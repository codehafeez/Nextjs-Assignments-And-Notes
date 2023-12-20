import connectDB from '../../utils/dbConnect';
import Student from '../../models/studentModel';
import multer from 'multer';
import path from 'path';

connectDB();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const extension = path.extname(file.originalname);
    const filename = `${timestamp}${extension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id } = req.query;

    try {
      upload.single('imageFile')(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading image' });
        } else if (err) {
          return res.status(500).json({ error: 'Unexpected error during image upload' });
        }

        const { name, age } = req.body;
        const existingStudent = await Student.findById(id);

        if (!existingStudent) {
          return res.status(404).json({ error: 'Student not found' });
        }

        // Check if req.file exists before accessing its properties
        const image_name = req.file ? req.file.filename : existingStudent.image_name;

        const updatedStudent = {
          name,
          age,
          image_name,
        };

        const result = await Student.findByIdAndUpdate(id, updatedStudent, { new: true });
        res.status(200).json({ message: 'Student updated successfully', updatedStudent: result });
      });
    } catch (error) {
      console.error('Error updating student:', error);
      res.status(500).json({ error: 'Error updating student' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
