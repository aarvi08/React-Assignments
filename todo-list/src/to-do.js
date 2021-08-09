import React from "react";
import "./index.css";
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
      item: state.item.concat(newItem),
      text: "",
    }));
  }
  render() {
    return (
      <div>
        <div className="heading">
          <strong>
            <em>
              <u>TODO List App</u>
            </em>
          </strong>
        </div>
        <div className="main">
          <div className="description">
            <p>
              <strong>
                This is an application where you can write your list of anything
                . For e.g. ,
                <ul>
                  <li>Things you have to do today , tomorrow or in a week.</li>
                  <li>List of items you wanna purchase.</li>
                  <li>List of places you wanna visit etc.</li>
                </ul>
                You can make any type of list you want. Welcome here, hoping all
                the items of your list get done . Have a nice day . It's nice
                having you with us.
              </strong>
            </p>
          </div>

          <hr />
          <br />
          <ol>
            {this.state.item.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ol>
          <form onSubmit={this.handleSubmit}>
            <lable htmlfor="id">
              <strong>Input the LIST</strong>
            </lable>{" "}
            &nbsp;
            <input
              id="id"
              type="text"
              placeholder="LIST ITEMS"
              onChange={this.handleChange}
              value={this.state.text}
            />{" "}
            &nbsp;
            <button>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TODO;
