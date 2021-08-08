import React from "react";

class TODO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      item: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) return;

    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
  render() {
    return (
      <div className="main">
        <div className="about">
          <h1>
            <strong>
              <em>TODO List App</em>
            </strong>
          </h1>
          <p>
            This is an application where you can write your list of anything .
            For e.g. ,
            <ul>
              <li>Things you have to do today , tomorrow or in a week.</li>
              <li>List of items you wanna purchase.</li>
              <li>List of places you wanna visit etc.</li>
            </ul>
            You can make any type of list you want. Welcome here, hoping all the
            items of your list get done . Have a nice day . It's nice having you
            with us.
          </p>
        </div>
        <hr />
        <br />
        <ol>
          {this.state.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ol>
        <form onSubmit={this.handleSubmit}>
          <lable htmlfor="id">Input the LIST</lable>
          <input
            id="id"
            type="text"
            placeholder="LIST ITEMS"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TODO;
