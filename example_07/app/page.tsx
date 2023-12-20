'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  
  const router = useRouter();

  return (
    <main>
      <h2>Next.js Linking and Navigation Example 07</h2>
      <Link href='/about'>Go to About Page</Link>
      <br/><br/>
      <Link href='/profile?id=3'>Go to Profile Page</Link>
      <br/><br/>
      <button onClick={() => router.push('/about')}>Go to About Page</button>
      <button onClick={() => router.push('/profile?id=3')}>Go to Profile Page</button>
    </main>
  );
}

export default HomePage;
