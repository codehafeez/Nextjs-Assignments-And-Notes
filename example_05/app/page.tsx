const addNumbers = (a:any, b:any) => {
  return a + b;
};

const multiplyNumbers = (a:any, b:any) => {
  return a * b;
};

const Home = () => {
  const num1 = 5;
  const num2 = 3;

  const sumResult = addNumbers(num1, num2);
  const multiplyResult = multiplyNumbers(num1, num2);

  return (
    <main>
      <h1>Next.js User Define Functions Example 05</h1>
      <p>Sum of {num1} + {num2} : {sumResult}</p>
      <p>Multiply of {num1} * {num2} : {multiplyResult}</p>
    </main>
  );
};

export default Home;
