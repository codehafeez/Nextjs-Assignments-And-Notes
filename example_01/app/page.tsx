import Image from 'next/image'
export default function Home() {
  return (
    <div className="main-div">
      <h1>Next.js Example 01</h1>
      <ul>
        <li>&#9733; Public Image</li>
        <li>&#9733; CSS Inline</li>
        <li>&#9733; CSS using className</li>
      </ul>

      <Image src="/next.svg" alt="Next.js Logo" style={{ marginTop:'20px', marginBottom:'10px' }} width={180} height={37}/>
      <a href='https://codehafeez.com/' target='blank'>Assignment & Notes by CodeHafeez</a>
    </div>
  )
}

