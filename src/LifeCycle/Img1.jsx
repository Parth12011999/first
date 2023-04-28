import React,{useEffect} from "react";


function Img1() {

    useEffect(()=>{
        console.log("DidMount")
        return () => console.log("WillUnmount")
    },[])

  return (
    <div>
      <img src="https://wallpaperaccess.com/full/2171863.png" alt="jiij" />
    </div>
  );
}

export default Img1;
