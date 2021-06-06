import React, { Component } from "react";
import Form from './Form';
import ResultSearch from './ResultSearch';
import './index.css';
import Statistics from './Statistics';

const API_KEY = "aa1e24b44bb69aac50de3419c0c1ac07";
const SEARCH_PARAM = '&search=';

// (`https://api.worldoftanks.ru/wot/account/list/?application_id=${API_KEY}${SEARCH_PARAM}${nickname}`);

class Search extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      nickname: null,
      account_id: null,
      global_rating: null,
      error:"",
    }
  }

  getSearchResult = async (e) => {
    e.preventDefault();
    const nickname = e.target.elements.nickname.value;
    // let status;

    if(nickname) {
      const apiUrl = await fetch(
          `https://api.worldoftanks.ru/wot/account/list/?application_id=${API_KEY}${SEARCH_PARAM}${nickname}`
        );
      const status = await apiUrl.json();
      console.log(status);

      const accountId = status.data && status.data[0].account_id;

      // сделать запрос на получение статистики
      const stastistics = await fetch(
        `https://api.worldoftanks.ru/wot/account/info/?application_id=aa1e24b44bb69aac50de3419c0c1ac07&account_id=${accountId}`
      );
      const resultStastistics = await stastistics.json();
      console.log(resultStastistics);
      // console.log(resultStastistics.data);

      this.setState({
        nickname: status.data && status.data[0].nickname,
        account_id: status.data && status.data[0].account_id,
        global_rating: status.data && resultStastistics.data[accountId].global_rating,
        error: "",
      });
      // console.log(status.data[0].account_id);
    } else {
      this.setState({
        nickname: null,
        account_id: null,
        global_rating:null,
        error: "Введите никнейм",
      });
    }
  }

  render() {
    return (
      <>
        <div className="search__conteiner" id="Search">
          {/* <FetchUser /> */}
          <Form searchMethod={this.getSearchResult} />
          <ResultSearch 
              nickname={this.state.nickname}
              account_id={this.state.account_id}
              global_rating={this.state.global_rating}
              error={this.state.error}
            />
            {/* <Statistics 
              account_id={this.state.account_id}
            /> */}
        </div>
      </>
    );
  }
}

export default Search;