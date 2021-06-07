import React, { Component } from "react";

class ResultSearch extends Component {
  render() {
    return (
      <div className="result">
        { this.props.nickname &&
          <div>
            <p className="result__title">Nickname:<span className="result__nickname">{this.props.nickname}</span></p>
            <p className="result__text subtitle">Account id: {this.props.account_id}</p>
            <div className="result-conteiner">
              <p className="result__text">Личный рейтинг: {this.props.global_rating}</p>
              <p className="result__text">Battles: {this.props.battles}</p>
              <p className="result__text">Max Damage: {this.props.max_damage}</p>
              <p className="result__text">Max Frags: {this.props.max_frags}</p>
              <p className="result__text">Survived Battles: {this.props.survived_battles}</p>
            </div>
          </div>
        }
        <p className="result__title">{this.props.error}</p>
      </div>
    )
  }
}

export default ResultSearch;