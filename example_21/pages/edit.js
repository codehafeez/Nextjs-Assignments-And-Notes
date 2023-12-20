import { useRouter } from 'next/router';
import EditStudentForm from '../components/EditStudentForm';
const EditStudentPage = () => {

  const router = useRouter();
  const { id } = router.query;
  
    return (
      <EditStudentForm studentId={id} onUpdate={() => router.push('/')} />
    );
  };
  
  export default EditStudentPage;