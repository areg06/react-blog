import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

export default class category extends Component {
  render() {
    return (
      <div className="Row d-flex justify-content-center">
          <button type="button" className="btn category btn-warning m-1">Առողջություն</button>
          <button type="button" className="btn category btn-warning m-1">սպորտ</button>
          <button type="button" className="btn category btn-warning m-1">Արվեստ</button>
      </div>
    );
  }
}


