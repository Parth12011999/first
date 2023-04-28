import React, { Component } from 'react'

export class Card_class extends Component {
    constructor(props){
        super();
        this.props=props;
    }
  render() {
    return (
        <div  className="col-md-4">
        <div className="card" style={{ width: "18rem"}}>
          <img src={this.props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              {this.props.des}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Card_class