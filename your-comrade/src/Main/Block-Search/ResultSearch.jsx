import React, { Component } from "react";

class ResultSearch extends Component {
  render() {
    return (
      <div className="result">
        { this.props.nickname &&
          <div>
            <p className="result__title">Nickname: <span className="result__nickname">{this.props.nickname}</span></p>
            <p className="result__text subtitle">Account id: <span className="result__nickname">{this.props.account_id}</span></p>
            <div className="result-conteiner">
              <p className="result__text">Личный рейтинг:<span  className="result__nickname">{this.props.global_rating}</span></p>
              <p className="result__text">Количество боёв: <span className="result__nickname">{this.props.battles}</span></p>
              <p className="result__text">Максимальный урон за бой: <span className="result__nickname">{this.props.max_damage}</span></p>
              <p className="result__text">Максимум уничтожено за бой: <span className="result__nickname">{this.props.max_frags}</span></p>
              <p className="result__text">Максимальный опыт за бой: <span className="result__nickname">{this.props.max_xp}</span></p>
              <p className="result__text">Выживаемость: <span className="result__nickname">{this.props.survived_battles}</span></p>
            </div>
          </div>
        }
        <p className="result__title">{this.props.error}</p>
      </div>
    )
  }
}

export default ResultSearch;