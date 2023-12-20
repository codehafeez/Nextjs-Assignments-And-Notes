export default function Home() {
  return (
    <main>
      <h1>Next.js with Environment (.env) Variables File</h1>
      <p>API Key: {process.env.NEXT_PUBLIC_API_KEY}</p>
      <p>Live URL: {process.env.LIVE_URL}</p>
      <p>Base URL: {process.env.BASE_URL}</p>
    </main>
  );
}
