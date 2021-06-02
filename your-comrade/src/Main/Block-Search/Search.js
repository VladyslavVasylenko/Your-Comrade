import React, { Component } from "react";
// import FetchUser from './FetchUser';
import Form from './Form';
import ResultSearch from './ResultSearch';
import './index.css';

const API_KEY = "aa1e24b44bb69aac50de3419c0c1ac07";
const SEARCH_PARAM = '&search=';
const Account_id = '&account_id=';
// (`https://api.worldoftanks.ru/wot/account/info/?application_id={API_KEY}${Account_id}${account_id}`);
// (`https://api.worldoftanks.ru/wot/account/list/?application_id=${API_KEY}${SEARCH_PARAM}${nickname}`);

class Search extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      nickname: undefined,
      account_id: undefined,
      frags: undefined,
      error: "",
    }
  }

  gettingResultSearch = async (e) => {
    e.preventDefault();
    let nickname = e.target.elements.nickname.value;
    let account_id = this.state.account_id;
    let status;

    if(nickname) {
      const api_url = await
      fetch(`https://api.worldoftanks.ru/wot/account/list/?application_id=${API_KEY}${SEARCH_PARAM}${nickname}`);
      status = await api_url.json();
      console.log(status);

      this.setState({
        nickname: status.data[0].nickname,
        account_id: status.data[0].account_id,
        error: "",
      });
      // console.log(status.data[0].account_id);
    } else {
      this.setState({
        nickname: undefined,
        account_id: undefined,
        error: "Введите никнейм",
      });
    }
  }

  render() {
    return (
      <>
        <div className="search__conteiner" id="Search">
          {/* <FetchUser /> */}
          <Form searchMethod={this.gettingResultSearch} />
          <ResultSearch 
              nickname={this.state.nickname}
              account_id={this.state.account_id}
            />
        </div>
      </>
    );
  }
}

// function Search() {
//   return (
//     <div className="search__conteiner" id="Search">
//       <FetchUser />
//     </div>
//   );
// }

export default Search;