import Header from './Header/Header';
import Search from './Main/Block-Search/Search';
import Instruction from './Main/Block-Instruction/Instruction';
import Contact from './Main/Block-Contact/Contact';
import Chat from './Main/Block-Chat/Chat';
import React, {useState} from 'react';

import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

function App() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <div className="center-menu">
            <nav className="navbar__list" id={showLinks ? "hidden" : ""}>
              <NavLink exact to="/" className="header__item" activeClassName="active">Привествие</NavLink>
              <NavLink to="/Instruction" className="header__item" activeClassName="active">Инструкция</NavLink>
              <NavLink to="/Search" className="header__item" activeClassName="active">Поиск</NavLink>
              <NavLink to="/Chat" className="header__item" activeClassName="active">Чат</NavLink>
              <NavLink to="/Contact" className="header__item" activeClassName="active">Контакты</NavLink>
            </nav>
            <div onClick={() => setShowLinks(!showLinks)} className="navbar__btn">
            <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>


        <div className="header">
          <nav className="header__list">
            <NavLink exact to="/" className="header__item" activeClassName="active">Привествие</NavLink>
            <NavLink to="/Instruction" className="header__item" activeClassName="active">Инструкция</NavLink>
            <NavLink to="/Search" className="header__item" activeClassName="active">Поиск</NavLink>
            <NavLink to="/Chat" className="header__item" activeClassName="active">Чат</NavLink>
            <NavLink to="/Contact" className="header__item" activeClassName="active">Контакты</NavLink>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Header}/>
          <Route path="/Search" component={Search}/>
          <Route path="/Instruction" component={Instruction}/>
          <Route path="/Chat" component={Chat}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;