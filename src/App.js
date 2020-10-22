import React, {useState} from 'react';
import './App.css';
import Count from './Count.js';

function App() {
  let [number, setNumber] = useState(0);
  let [day, setDay] = useState(false);
  return (
    <div className={`box ${day ? 'light' : 'dark'}`}>
      <h1 className="mainHeading">Class 4 Assignment</h1>
      <Count counter={number}/> 
      <button onClick={() => setNumber(++number)}>Increment</button>
      <button onClick={() => setNumber(--number)}>Decrement</button>
      <hr />
      <button onClick={() => setDay(!day)}>Update Day</button>
      <h1>It's {day ? "Day" : "Night"}</h1>
    </div>
  );
}

export default App;
