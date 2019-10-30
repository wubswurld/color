import React, { Component } from "react";
import * as actions from "../actions";
import { Input, Label, Button } from "reactstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import BasicNav from "../Components/Nav/Navbar";
// import Icon from "./svg";
// import SimpleSnackbar from './ContactSnack'

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }
  handleSubmit = e => {
    const Sent = ({ name }) => (
      <div>
        Thank you {name}. <br /> Your message has been sent!
      </div>
    );
    const INITIAL_STATE = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
    //block re render
    e.preventDefault();
    toast(<Sent name={this.state.name} />);
    //axios action sends state
    actions.contact(this.state).then(res => {
      console.log(res.data.message);
    });
    this.setState({ ...INITIAL_STATE });
  };

  updateValue = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <div id="navbar">
          <BasicNav></BasicNav>
          {/* <Link className="hvr-grow" id="logo" to="/"> */}
          {/* <Icon id="icon"></Icon> */}
          {/* </Link> */}
          {/* <Link className="hvr-grow" id="logo" to="/"><p>Color.</p></Link> */}
        </div>
        <div id="condiv">
          <span class="" id="checkcon">
            Contact Color. Today
          </span>
        </div>
        <form className="react-form" onSubmit={this.handleSubmit}>
          <br />
          <Label for="Name">Name</Label>
          <Input
            onChange={this.updateValue}
            className="form-input"
            id="form-input"
            value={this.state.name}
            name="name"
            type="text"
            placeholder="Name"
          />
          <br />
          <Label for="Email">Email</Label>
          <Input
            onChange={this.updateValue}
            className="form-input"
            name="email"
            value={this.state.email}
            type="email"
            placeholder="Email"
          />
          <br />
          <Label for="Phone">Phone</Label>
          <Input
            onChange={this.updateValue}
            className="form-input"
            name="phone"
            value={this.state.phone}
            type="phone"
            placeholder="Phone"
          />
          <br />
          <Label for="Message">Message</Label>
          <Input
            type="textarea"
            onChange={this.updateValue}
            className="form-textarea"
            name="message"
            value={this.state.message}
            placeholder="Message"
            id="message"
          />
          <br />
          <div className="form-group">
            {/* <input className='btn' type='submit'/>   */}
            <Button
              outline
              color="primary"
              id="send"
              type="submit"
              className="send"
              block
            >
              Send!
            </Button>
          </div>
        </form>
      </>
    );
  }
}
export default Contact;
