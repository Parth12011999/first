import React, { Component } from "react";

export class Class_state extends Component {
  constructor(state) {
    super();
    this.state = {
      name: "Parth",
      age: "35",
      number: 1,
      isImage: true,
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Name:{this.state.name}</h1>
        <h1>Age: {this.state.age}</h1>
        <button onClick={() => this.setState({ name: "Vikas", age: "40" })}>
          Change
        </button>

        <hr />

        <button onClick={()=> this.setState({number: this.state.number+1})}>Increment</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=> this.setState({number: this.state.number-1})}>Decrement</button>

        <hr />
        <button onClick={()=> this.setState({isImage: !(this.state.isImage)})}>Hide/show</button>
        <div className="img-fluid">
        {   
            this.state.isImage ? <img src="https://wallpaperaccess.com/full/2171863.png" alt="jiij"/> : null 
        }
        </div>
      </div>
    );
  }
}

export default Class_state;
