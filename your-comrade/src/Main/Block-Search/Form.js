import React, { Component }  from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.ResultSearch}>
        <input type="text" name="nickname" placeholder="Send Nickname"/>
        <button>Search</button>
      </form>
    )
  }
}

export default Form;