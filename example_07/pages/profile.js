import { useRouter } from 'next/router';
const ProfilePage = () => {

  const router = useRouter();
  const { id } = router.query;
  
    return (
      <main>
        <h1>Profile Page</h1>
        <p>ID : {id}</p>
      </main>
    );
  };
  
  export default ProfilePage;