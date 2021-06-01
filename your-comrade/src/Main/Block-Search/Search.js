import React, { Component } from "react";
// import FetchUser from './FetchUser';
import Form from './Form';
import ResultSearch from './ResultSearch';
import './index.css';

const API_KEY = "aa1e24b44bb69aac50de3419c0c1ac07";
const SEARCH_PARAM = '&search=';

class Search extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      // status: undefined,
      nickname: undefined,
      account_id: undefined,
      error: "",
    }
  }

  gettingResultSearch = async (e) => {
    e.preventDefault();
    let nickname = e.target.elements.nickname.value;
    let status;

    if(nickname) {
      const api_url = await
      fetch(`https://api.worldoftanks.ru/wot/account/list/?application_id=${API_KEY}${SEARCH_PARAM}`);
      status = await api_url.json();
      console.log(status);
    }

      this.setState({
        nickname: status.data.nickname,
        account_id: status.data.account_id,
        error: "",
      });
  }

  render() {
    return (
      <div className="search__conteiner" id="Search">
        {/* <FetchUser /> */}
        <Form ResultSearch={this.gettingResultSearch} />
        <ResultSearch 
          nickname={this.props.nickname}
          account_id={this.props.account_id}
        />
      </div>
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