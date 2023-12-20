import React from 'react';
import StyledComponent from './components/StyledComponent';
import StyledComponentWithCssModules from './components/StyledComponentWithCssModules';

export default function Home() {
  const shouldHighlight = true;
  return (
      <main>
        <h1>Next.js Styling Example 03</h1>
        <StyledComponent />
        <StyledComponentWithCssModules />
        <br />
        <a href='https://codehafeez.com/' target='_blank'>Assignment & Notes by CodeHafeez</a>
      </main>
    );
}
