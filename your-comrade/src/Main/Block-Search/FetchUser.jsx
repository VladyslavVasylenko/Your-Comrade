import React, { Component } from "react";
import './index.css';

const BASE_PATH = "https://api.worldoftanks.ru/wot/account/list/?application_id=aa1e24b44bb69aac50de3419c0c1ac07";
const SEARCH_PATH = '';
const SEARCH_PARAM = '&search=';

class FetchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result:{},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchData = () => {
    fetch(`${BASE_PATH}${SEARCH_PARAM}${SEARCH_PATH}`)
    .then(res => res.json())
    .then((result) => {this.setState(result)})
    .catch(error => error);
  }

  handleChange(event) {
    console.log(event);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  componentDidMount() {
    const {search} = this.state;
    this.fetchData(search);
  }

  render() {
    
    return (
      <div>
        <form className="form-search" onSubmit={this.handleSubmit}>
            <input 
            className="input-field" 
            name="name"
            placeholder="Nickname"
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
            />
            <input 
            type="submit" 
            className="btn" 
            value="Search"/>
        </form>
        <div className="result"></div>
      </div>
    )
  }
}

export default FetchUser;