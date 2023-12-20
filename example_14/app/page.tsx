'use client'
import Link from 'next/link';
const HomePage = () => {
  return (
    <main>
      <h2>Next.js Linking and Navigation - Pass Mulit Params Values using URL</h2>
      <Link href='/study/v1/v2'>Study Page Link1</Link>
      <br/><br/>
      <Link href='/study/2/codehafeez/4/533'>Study Page Link2</Link>
    </main>
  );
}

export default HomePage;
