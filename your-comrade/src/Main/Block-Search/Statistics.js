import React, { Component } from "react";
import ResultSearch from "./ResultSearch";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      global_rating: undefined,
      error: undefined,
    };
  }

  componentDidMount() {
    fetch(`https://api.worldoftanks.ru/wot/account/info/?application_id=aa1e24b44bb69aac50de3419c0c1ac07&account_id=${this.props.account_id}`)
      .then(res => res.json())
      .then(
        (status) => {
          this.setState ({
            global_rating: status.data?.global_rating,
            error: undefined,
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )      
  }

  render() {
    console.log(this.state.global_rating);
    return (
      <ResultSearch 
        global_rating={this.state.global_rating}
      />
    )
  //   const { error } = this.state;
  //   console.log(this.state.global_rating);
  //   if (error) {
  //     return <p className="result__text subtitle">{this.state.error}</p>;
  //   } else {
  //     return (
  //       <div>
  //       { this.props.global_rating &&
  //         <div>
  //           <p className="result__text subtitle">Global rating: {this.props.global_rating}</p>
  //         </div>
  //       }
  //       </div>
  //     )
  //   }
  }
}

export default Statistics;