import { useState } from "react";
import "../style/buttonTest.css";

function ButtonTest() {
  const [count, setCount] = useState(0);
  // first item in [] is the variable, second is the update function, the 0 is the default value
  return (
    <>
      <div id="useStateButtons">
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>count: {count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
}

export default ButtonTest;
