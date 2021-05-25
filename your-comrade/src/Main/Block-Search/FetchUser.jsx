import React, { Component } from "react";
import './index.css';

// const BASE_PATH = "https://api.worldoftanks.ru/wot/account/list/?application_id=aa1e24b44bb69aac50de3419c0c1ac07";
// const SEARCH_PATH = '';
// const SEARCH_PARAM = 'search=';

// class FetchUser extends Component {
//   state = {
//     search:'',
//     result:{},
//   }

//   componentDidMount() {
//     const {search} = this.state;
//     this.fetchData(search);
//   }

//   fetchData = () => {
//     fetch(`${BASE_PATH}${SEARCH_PARAM}`)
//     .then(res => res.json())
//     .then(result => this.setNickname(result))
//     .catch(error => error);
//   }

//   handleInputChange = ({ target: {value}}) => {
//     this.setState({
//       search: value
//     })
//   }

// getSearch = ({ key }) => {
//   if (key === 'Enter') {
//     const { searchQuery } = this.state;
//     this.fetchData(searchQuery);
//   }
// }

//   setNickname = result => {
//     this.setState({ result });
//   }

//   render() {
//     const {search, result} = this.state;
//     const { hits = [] } = result;

//     console.log(result)
//     return (
//       <div>
//         <form className="form-search">
//           <input
//             name="name"
//             placeholder="Nickname"
//             className="input-field"
//             onChange={this.handleInputChange} value={search} 
//           />
//           <input type="submit" className="btn" value="Search"/>
//         </form>
//         <div className="result"></div>
//       </div>
//     )
//   }
// }
// 'https://api.worldoftanks.ru/wot/account/achievements/?application_id=aa1e24b44bb69aac50de3419c0c1ac07'

class FetchUser extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    .then(res => res.json())
    .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks
          });
        }
      ),
      (error => {
        this.setState({
            isLoaded:true,
            error
          });
        }
      )
  }

  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <p>Error {error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    } else {
      return <ol>{items.map(item => (<li key={item.name}>{item.strDrink}</li>))}</ol>
    }
  }
}
export default FetchUser;