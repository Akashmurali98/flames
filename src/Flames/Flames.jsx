import React, { Component } from "react";
import "../CSS/Flames.css";
import PopUp from "./Popup";

class Flame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      visibility: "visible",
    };
  }

  handlechange = () => {
    this.setState({
      status: true,
      visibility: "hidden",
    });
  };
  render() {
    return (
      <div className="parentflames">
        {this.state.status && <PopUp />}
        <div className="flamesContainer">
          <button
            className={this.state.visibility}
            type="button"
            onClick={this.handlechange}
            style={{ visibility: this.state.visibility }}
          >
            Lets Start
          </button>
          {/* <button onClick={() => this.view(item)}>Edit</button> */}
        </div>
      </div>
    );
  }
}

export default Flame;
