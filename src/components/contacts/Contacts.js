import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;

          return (
            <React.Fragment>
              <div className="display-4 mb-2">
                <h1 className="text-danger">Contact List</h1>
              </div>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
