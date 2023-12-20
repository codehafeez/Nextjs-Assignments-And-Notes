import MyComponent2 from './components/MyComponent2';
export default function Home() {
  return (
    <main>
      <h1>Next.js Example 02</h1>
      <ul>
        <li>&#9733; Simple Component</li>
        <li>&#9733; Pass Data to Component</li>
      </ul>

      <br/><hr/><br/>
      <MyComponent1/>
      <MyComponent2/>
      <MyComponent3 name="Hafeez" />
      <br/>
      <a href='https://codehafeez.com/' target='blank'>Assignment & Notes by CodeHafeez</a>
    </main>
  )
}

const MyComponent1 = () => {
  return (
    <>
      <p>This is a custom component-01</p>
    </>
  );
};

const MyComponent3 = (props:any) => {
  return (
    <>
      <p>This is a custom component3 (Pass Value): {props.name}</p>
    </>
  );
};
