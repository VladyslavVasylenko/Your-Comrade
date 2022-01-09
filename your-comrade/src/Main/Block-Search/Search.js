import React, { Component } from "react";
import Form from './Form';
import ResultSearch from './ResultSearch';
import './index.css';

const API_KEY = "aa1e24b44bb69aac50de3419c0c1ac07";
const SEARCH_PARAM = '&search=';

class Search extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      nickname: null,
      account_id: null,
      global_rating: null,
      battles: null,
      max_damage: null,
      max_frags: null,
      survived_battles: null,
      max_xp: null,
      damage_dealt: null,
      averageDamage: null,
      error: '',
    }
  }

  getSearchResult = async (e) => {
    e.preventDefault();
    const nickname = e.target.elements.nickname.value;

    if(nickname) {
      const apiUrl = await fetch(
          `https://api.worldoftanks.ru/wot/account/list/?application_id=${API_KEY}${SEARCH_PARAM}${nickname}`
        );
      const status = await apiUrl.json();
      console.log(status);

      const accountId = status.data && status.data[0].account_id;

      const stastistics = await fetch(
        `https://api.worldoftanks.ru/wot/account/info/?application_id=aa1e24b44bb69aac50de3419c0c1ac07&account_id=${accountId}`
      );
      const resultStastistics = await stastistics.json();
      console.log(resultStastistics);

      this.setState({
        nickname: status.data && status.data[0].nickname,
        account_id: status.data && status.data[0].account_id,
        global_rating: status.data && resultStastistics.data[accountId].global_rating,
        battles: status.data && resultStastistics.data[accountId].statistics.all.battles,
        max_damage: status.data && resultStastistics.data[accountId].statistics.all.max_damage,
        max_frags: status.data && resultStastistics.data[accountId].statistics.all.max_frags,
        survived_battles: status.data && resultStastistics.data[accountId].statistics.all.survived_battles,
        max_xp: status.data && resultStastistics.data[accountId].statistics.all.max_xp,
        averageDamage: Math.round(resultStastistics.data[accountId].statistics.all.damage_dealt / resultStastistics.data[accountId].statistics.all.battles),
        error: '',
      });
    } else if (nickname === undefined) {
        this.setState({
          nickname: null,
          account_id: null,
          global_rating: null,
          battles: null,
          max_damage: null,
          max_frags: null,
          survived_battles: null,
          max_xp: null,
          error: 'Внимание игрока с таким ником не зарегистрировано!',
        });
    } else {
        this.setState({
          nickname: null,
          account_id: null,
          global_rating: null,
          battles: null,
          max_damage: null,
          max_frags: null,
          survived_battles: null,
          max_xp: null,
          error: 'Введите никнейм',
        });
      }
    }
    
  render() {
    return (
      <>
        <div className="search__conteiner" id="Search">
          <Form searchMethod={this.getSearchResult} />
          <ResultSearch 
            nickname={this.state.nickname}
            account_id={this.state.account_id}
            global_rating={this.state.global_rating}
            battles={this.state.battles}
            max_damage={this.state.max_damage}
            max_frags={this.state.max_frags}
            survived_battles={this.state.survived_battles}
            max_xp={this.state.max_xp}
            averageDamage={this.state.averageDamage}
            error={this.state.error}
            />
        </div>
      </>
    );
  }
}

export default Search;