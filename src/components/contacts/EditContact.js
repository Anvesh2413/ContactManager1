import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = (await res).data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const { id } = this.props.match.params;
    const updContact = { name, email, phone };
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact)
      .then((res) => dispatch({ type: "UPDATE_CONTACT", payload: res.data }));

    this.setState({
      name: "",
      email: "",
      phone: "",
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    label="Name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    name="email"
                    label="Email"
                    placeholder="Enter Email"
                    value={email}
                    type="email"
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    name="phone"
                    label="Mobile"
                    placeholder="Enter Contact Number"
                    value={phone}
                    onChange={this.onChange}
                  />

                  <input
                    className="btn btn-light btn-block"
                    type="submit"
                    value="Update Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default EditContact;
