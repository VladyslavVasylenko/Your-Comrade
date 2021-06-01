import React, { Component } from "react";

class ResultSearch extends Component {
  render() {
    return (
      <div className="result-search">
        { this.props.nickname &&
          <div>
            <p>Nickname: {this.props.nickname}</p>
            <p>Account_id: {this.props.account_id}</p>
          </div>
        }
      </div>
      
    )
  }
}

export default ResultSearch;