import Header from './Header/Header';
import Search from './Main/Block-Search/Search';
import Instruction from './Main/Block-Instruction/Instruction';
import Contact from './Main/Block-Contact/Contact';
// import Footer from './Footer/Footer'

import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Search />
      <Instruction/>
      <Contact/> */}
      <Router>
        <ul className="header__list">
          <li className="header__item"><NavLink to="/" exact>Привествие</NavLink></li>
          <li className="header__item"><NavLink to="/Instruction">Инструкция</NavLink></li>
          <li className="header__item"><NavLink to="/Search">Раздел поиска</NavLink></li>
          <li className="header__item"><NavLink to="/Chat">Чат</NavLink></li>
          <li className="header__item"><NavLink to="/Contact">Контакты</NavLink></li>
        </ul>
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