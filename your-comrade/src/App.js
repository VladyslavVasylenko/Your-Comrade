import Header from './Header/Header';
import Search from './Main/Block-Search/Search';
import Instruction from './Main/Block-Instruction/Instruction';
import Chat from './Main/Block-Chat/Chat';
import Contact from './Main/Block-Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Instruction />
      {/* <Chat /> */}
      <Contact />
    </div>
  );
}

export default App;
