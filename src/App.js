import { useState } from "react";
import "./styles.css";

export default function App() {
  const [countValue, setCountValue] = useState(1);
  const [rangevalue, setRangeValue] = useState();

  const changeCount = (num) => {
    setCountValue((prev) => prev + Number(num));
  };
  return (
    <div className="App">
      <menu>
        <div>Increment/Decrement by: {rangevalue}</div>
        <input
          defaultValue={0}
          step={1}
          min={0}
          max={10}
          id="rangeInp"
          onChange={(e) => setRangeValue(e.target.value)}
          type="range"
        />
        <div>{countValue}</div>
        <button onClick={() => setCountValue(countValue - rangevalue)}>
          decrement
        </button>
        <button onClick={() => changeCount(rangevalue)}>increment</button>
        {/*gfrtdrt*/}
      </menu>
    </div>
  );
}
