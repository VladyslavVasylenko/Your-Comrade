import React, { Component }  from "react";

class Form extends Component {
  render() {
    return (
      <form className="form-search" onSubmit={this.props.ResultSearch}>
        <input className="input-field" type="text" name="nickname" placeholder="Send Nickname"/>
        <button className="btn">Search</button>
      </form>
    )
  }
}

export default Form;