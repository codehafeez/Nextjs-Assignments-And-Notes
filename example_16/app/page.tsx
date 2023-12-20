"use client"
import Link from 'next/link'
import AppHead from '../components/Head';
export default function Home() {
  return (
    <main>
      <AppHead title="Home Page" description="This is the home page." />
      <h1>SEO Tile & Description Dynamic - Home Page</h1>

      <Link href="/about" >Go to About Page</Link>
      <br /><br />
      <Link href="/contact" >Go to Contact Page</Link>
      <br /><br />
    </main>
  )
}
