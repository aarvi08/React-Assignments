import React from "react";

class TODO extends React.Component {
  constructor(props) {
    super(props);
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

        <form>
          <lable>Input the LIST</lable>
          <input type="text" placeholder="LIST ITEMS" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TODO;
