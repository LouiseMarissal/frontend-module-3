import React, { Component } from "react";
import axios from "axios";

export default class FormComment extends Component {
  state = {
    message: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.setState);
    axios
      .patch(process.env.REACT_APP_BACKEND_URL + "/user/")
      .then(res => {
        console.log(res);
        // props.history.push("/cocktails");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { message } = this.state;
    console.log({ message });

    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      >
        <div className="row">
          <input
            className="input"
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={() => void 0}
            value={message}
            placeholder="leave a comment here..."
          ></input>

          <button className="btn">send!</button>
        </div>
      </form>
    );
  }
}
