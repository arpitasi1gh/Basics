import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  function increase() {
    return setCount(count + 1);
  }
  function decrease() {
    return setCount(count - 1);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default App;