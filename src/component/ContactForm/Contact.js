import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;

    return (
      <div className="form-style-6">
        <h1>Contact Us </h1>

        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mrganjyn"
          method="POST"
        >
          <input type="text" name="name" placeholder="Name..." required />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            required
          />
          <textarea
            type="text"
            name="message"
            placeholder="Type your Message"
          ></textarea>
          <p>Your information will send to my gmail: loc.dinhtan@gmail.com</p>
          <Link to="/">
            <button className="button_back">Back</button>
          </Link>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button className="button_submit">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Contact;
