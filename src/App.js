import Ract, { Component, useState}  from 'react';



const App = () => {
const [count, setCount] =useState(0);


  const increment = () => {
    setCount (count + 1);
  };
  return (
    <div>
      <h2>Simple Counter_App</h2>
      <p>Using hooks(useState)</p>
      <button id="buttons" onClick={increment}>Clicked {count} times</button>
    </div>
  )
}

export default App;
