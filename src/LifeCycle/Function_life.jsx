import React, { useEffect } from 'react'
import { useState } from "react";
import Img1 from './Img1';


function Function_life() {

    const [data, setData] = useState({
        name: "Parth",
        age: "30",
        number: 1,
        isImage: true,
      });

      useEffect(()=>{
        console.log("DidMount")
      },[])

      useEffect(()=>{
        return () => console.log("DidUpdate")
      },[data.number])
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
        <Img1/>
      ) : null}
    </div>
  </div>
  )
}

export default Function_life