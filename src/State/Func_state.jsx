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
      <h1>Name:{data.name}</h1>
      <h1>Age: {data.age}</h1>
      <button onClick={() => setData({ ...data, name: "Vikas", age: "40" })}>
        Change
      </button>

      <hr />

      <button onClick={() => setData({ ...data, number: data.number + 1 })}>
        Increment
      </button>
      <h1>{data.number}</h1>
      <button onClick={() => setData({ ...data, number: data.number - 1 })}>
        Decrement
      </button>

      <hr />
      <button onClick={() => setData({ ...data, isImage: false })}>Hide</button>
      <button onClick={() => setData({ ...data, isImage: true })}>show</button>
      <button onClick={() => setData({ ...data, isImage: !data.isImage })}>
        Hide/show
      </button>
      <div className="img-fluid">
        {data.isImage ? (
          <img src="https://wallpaperaccess.com/full/2171863.png" alt="jiij" />
        ) : null}
      </div>
    </div>
  );
}

export default Func_state;
