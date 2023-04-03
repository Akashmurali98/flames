import React, { Component } from "react";
import "../CSS/PopUp.css";
import Swal from "sweetalert2";

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      male: "",
      female: "",
      pop: false,
      isButtonOn: false,
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  flames = () => {
    let name1 = this.state.male.toLowerCase();
    let name2 = this.state.female.toLowerCase();
    if ((name1.length > 1) & (name2.length > 1)) {
      const flames = [
        "Friends",
        "Love",
        "Affection",
        "Marriage",
        "Enemy",
        "Sister",
      ];
      let common = [];
      // console.log(name1.length)

      for (let i = 0; i < name1.length; i++) {
        if (name2.indexOf(name1[i]) !== -1) {
          common += name1[i];
          name2 = name2.replace(name1[i], "");
        }
      }

      let remainingLetters = name1.length + name2.length - common.length;
      // console.log(remainingLetters);
      // console.log(remainingLetters)
      let result = flames[remainingLetters % 6];
      // console.log(remainingLetters % 6)

      this.setState({ result: result, button: false, pop: true });
      setTimeout(() => {
        Swal.fire(this.state.result);
      }, 1000);
    }
    // console.log(this.state.result)
  };

  componentDidMount(prevProps, prevState) {
    if (this.state.male === "" && this.state.female === "") {
      this.state.isButtonOn = true;
    } else {
      this.state.isButtonOn = false;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.male === "" && this.state.female === "") {
      this.state.isButtonOn = true;
    } else {
      this.state.isButtonOn = false;
    }
  }

  render() {
    const { male, female } = this.state;
    return (
      <div className="parentPop">
        <div className="childPop">
          <h2>Let's find the right one for you</h2>
          <form className="inputtext" onSubmit={() => this.flames()}>
            <input
              type="text"
              placeholder="Romeo"
              name="male"
              value={male}
              onChange={this.handleInputChange}
              required
            ></input>
            <br />
            <input
              type="text"
              placeholder="Juliet"
              name="female"
              value={female}
              onChange={this.handleInputChange}
              required
            ></input>
            <br></br>
            <button
              type="button"
              className="flamesButton"
              disabled={this.state.isButtonOn}
            >
              Check Me
            </button>{" "}
            <br></br>
          </form>
        </div>
      </div>
    );
  }
}

export default PopUp;
