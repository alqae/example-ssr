import React from 'react';

export default () => {
  console.log('Hello, Home!');
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setCount((prev) => prev++)}>Add</button>
    </div>
  );
}