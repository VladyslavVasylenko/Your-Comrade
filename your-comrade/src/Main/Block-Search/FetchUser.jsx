import React, { Component } from "react";
import './index.css';

// const BASE_PATH = "https://api.worldoftanks.ru/wot/account/list/?application_id=aa1e24b44bb69aac50de3419c0c1ac07";
// const SEARCH_PARAM = '&search=';

// class FetchUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       result:{},
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   fetchData = () => {
//     fetch(`${BASE_PATH}${SEARCH_PARAM}`)
//     .then(res => res.json())
//     .then((result) => {this.setState(result)})
//     .catch(error => error);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }

//   componentDidMount() {
//     const {value} = this.state;
//     this.fetchData(value);
//   }

//   render() {
    
//     return (
//       <div className="search">
//         <form className="form-search" onSubmit={this.handleSubmit}>
//           <input 
//           className="input-field" 
//           name="name"
//           placeholder="Nickname"
//           type="text" 
//           value={this.state.value} 
//           onChange={this.handleChange} 
//           />
//           <input 
//           type="submit" 
//           className="btn" 
//           value="Search"/>
//         </form>
//         <div className="result"></div>
//       </div>
//     );
//   }
// }

const FORM = ``;
const BASE_PATH = "https://api.worldoftanks.ru/wot/account/list/?application_id=aa1e24b44bb69aac50de3419c0c1ac07";
const SEARCH_PARAM = '&search=';

class FetchUser extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  } 

  componentDidMount() {
    fetch(`${BASE_PATH}${SEARCH_PARAM}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.status
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
        return (
          <>
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
            <ul>
              {items.map(item => (
                <li key={item.name}>
                  {item.nickname} {item.account_id}
                </li>
              ))}
            </ul>
          </>
        );
    }
  }
}

export default FetchUser;