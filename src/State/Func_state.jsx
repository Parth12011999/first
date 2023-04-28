import { useState } from "react";
import React from "react";

function Func_state() {
  const [data, setData] = useState({
    name: "Parth",
    age: "30",
    number: 1,
    isImage: true,
  });

  return (
    <div className="container">

      <button onClick={() => setData({ ...data, number: data.number + 1 })}>
        Increment
      </button>
      <h1>{data.number}</h1>
      <button onClick={() => setData({ ...data, number: data.number - 1 })}>
        Decrement
      </button>

    </div>
  );
}

export default Func_state;
