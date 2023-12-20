'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const AboutPage = () => {

  const router = useRouter();

    return (
      <div>
        <h1>About Us</h1>
        <Link href='/'>Go to Home Page</Link>
        <br/><br/>
        <button onClick={() => router.push('/')}>Go to Home Page</button>
      </div>
    );
  };
  
  export default AboutPage;
  