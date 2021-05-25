import React, {useState} from "react";

function FetchUser() {
  const [data,setData] = useState([]);

  const apiGet = ()=> {
    fetch("https://api.worldoftanks.ru/wot/encyclopedia/tanks/?application_id=aa1e24b44bb69aac50de3419c0c1ac07")
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
  };

  return (
    <div className="search-conteiner">
      <form className="search-form">
        <input
          id="name"
          name="name"
          placeholder="Nickname your comrade"
          className="search-form__nickname"
        />
        <input type="submit" className="btn" value="Search" onClick={apiGet}/>
      </form>
      <div className="search-answer">
        <ul className="search-answer__list">
          {data.map((item) => (
            <li className="search-answer__item" key={item.status}>{item.account_id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchUser;