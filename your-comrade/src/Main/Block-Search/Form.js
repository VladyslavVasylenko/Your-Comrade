import React, { Component }  from "react";

class Form extends Component {
  render() {
    return (
      <form className="form-search" onSubmit={this.props.searchMethod}>
        <input className="input-field" type="text" name="nickname" placeholder="Введите никнейм"/>
        <button className="btn">Search</button>
      </form>
    )
  }
}

export default Form;