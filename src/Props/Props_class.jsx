import React, { Component } from "react";
import Card_class from "./Card_class";

export class Props_class extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <Card_class
            img="https://m.media-amazon.com/images/I/41hVC-zcFEL._AC_SR400,600_.jpg"
            title="Fastrack"
            des="Fastrack Reflex Vox Smartwatch|Alexa Built-in|Bright HD Display|Upto 10 Days Battery|5 ATM Water Resistance|Multiple Sports Modes|100+ Watchfaces|24x7 HRM|Sp02|Stress Monitor|Camera & Music Control"
          />
          <Card_class
            img="https://m.media-amazon.com/images/I/41chR+bO5vL._AC_SR400,600_.jpg"
            title="Casio"
            des='Casio Edifice Analog Black Dial Men"s Watch-EFS-S560DC-1AVUDF (ED499)'
          />
          <Card_class
            img="https://m.media-amazon.com/images/I/412zSuiAK-L._AC_SR400,600_.jpg"
            title="Titan"
            des='Titan Neo Analog Dial Men"s Watch'
          />
        </div>
      </div>
    );
  }
}

export default Props_class;
