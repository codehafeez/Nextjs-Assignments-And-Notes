import '../styles/fonts.css';
export default function Home() {
  return (
    <main>
      
      <h1 className='font1'>Welcome to Next.js with Custom Font Example1</h1>
      <h1 className='font2'>Welcome to Next.js with Custom Font Example2</h1>
      <h1 className='font3'>Welcome to Next.js with Custom Font Example3</h1>

      <p style={{ fontFamily: 'DancingScript', fontSize: '1.2em' }}>
        This text uses the Dancing Script font use with inline css.
      </p>

    </main>
  )
}
