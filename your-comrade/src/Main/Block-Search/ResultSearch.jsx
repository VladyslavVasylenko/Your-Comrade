import React, { Component } from "react";

class ResultSearch extends Component {
  render() {
    return (
      <div className="result">
        { this.props.nickname &&
          <div>
            <p className="result__title">Nickname:<span className="result__nickname">{this.props.nickname}</span></p>
            <p className="result__text subtitle">Account id: {this.props.account_id}</p>
          </div>
        }
        <p className="result__text subtitle">{this.props.error}</p>
      </div>
      
    )
  }
}

export default ResultSearch;