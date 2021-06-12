import Header from './Header/Header';
import Search from './Main/Block-Search/Search';
import Instruction from './Main/Block-Instruction/Instruction';
import Contact from './Main/Block-Contact/Contact';

import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Search />
      <Instruction/>
      <Contact/> */}
      <Router>
        <div className="header">
          <ul className="header__list">
            <li exact="true" className="header__item"><NavLink to="/" activeClassName="active">Привествие</NavLink></li>
            <li className="header__item"><NavLink to="/Instruction" activeClassName="active">Инструкция</NavLink></li>
            <li className="header__item"><NavLink to="/Search" activeClassName="active">Раздел поиска</NavLink></li>
            <li className="header__item"><NavLink to="/Chat" activeClassName="active">Чат</NavLink></li>
            <li className="header__item"><NavLink to="/Contact" activeClassName="active">Контакты</NavLink></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route path="/Search" component={Search}/>
          <Route path="/Instruction" component={Instruction}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;