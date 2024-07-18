import React from "react";

// to create class component
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }

    console.log(this.state);
    this.props.addContactHandler(this.state);

    this.setState({ name: "", email: "" });
  };

  
  render() {
    return (
      <div className="ui main">
        <h2 style={{padding:'10px'}}> Add contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="ui field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
          </div>

          <div className="ui field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>
          <button className="ui button red">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
