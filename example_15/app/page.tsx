"use client"
import Link from 'next/link'
import {useRouter} from 'next/navigation'
export default function Home() {

  const router = useRouter();
  const navigate=(name:any)=>{
    router.push(name)
  }
  
  return (
    <main>
      <h1>Example 404 Custom Page Global & Route</h1>
      <Link href="/about" >Go to About Page</Link>
      <br /><br />
      <Link href="/aaaaaaa" >404 Page - Main Custom Page</Link>
      <br /><br />
      <Link href="/about/ddddddd" >404 Page - Route Custom Page</Link>
      <br /><br />
      <button onClick={()=>navigate("/about")} >Go to About Page</button>
    </main>
  )
}
