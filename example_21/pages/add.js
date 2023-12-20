import { useRouter } from 'next/router';
import AddStudentForm from '../components/AddStudentForm';
const AddStudentPage = () => {

  const router = useRouter();

  return (
      <AddStudentForm onAdd={() => router.push('/')} />
    );
  };
  
  export default AddStudentPage;