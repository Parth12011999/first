import React, { Component } from "react";

export default class Img extends Component {
    componentDidMount(){
        console.log("DidMount")
      }

      componentWillUnmount(){
        console.log("WillUnmount")
      }

  render() {
    return (
      <div>
        <img src="https://wallpaperaccess.com/full/2171863.png" alt="jiij" />
      </div>
    );
  }
}
