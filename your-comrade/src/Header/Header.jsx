import './style-header.css';

function Header() {
  return (
    <div className="conteiner">
      <div className="header">
        <ul className="header__list">
          <li className="header__item"><a href="#">Привествие</a></li>
          <li className="header__item"><a href="#Instruction">Инструкция</a></li>
          <li className="header__item"><a href="#Search">Раздел поиска</a></li>
          <li className="header__item"><a href="#">Контакты</a></li>
        </ul>
      </div>
      <div className="content-block">
        <p className="content-block__title">Рады вас привестовавть на портале <span className="content-block__title--color"><br/>&#8221;Your Comrade&#8221;</span></p>
        <p className="content-block__slogan">&#10077;В бою нет ничего важнее чем надежный боевой товарищ!&#10078;</p>
        <div className="content-block-text">
          <p className="content-block-text__text">
          <i className="fas fa-ellipsis-h"></i> На данном портале вы сможете подобрать себе боевого товарища. 
          </p>
          <p className="content-block-text__text">
          <i className="fas fa-ellipsis-h"></i> Предварительно посмотрев его скилл. Всё что вам нужно знать это: &#8275;его никнейм&#8275;.
          </p>
          <p className="content-block-text__text">
          <i className="fas fa-ellipsis-h"></i> В разделе инструкция вы сможете ознакомится с вспомогательными указателями где?, как искать?, что вводить?
          </p>
        </div>
      </div>
      <div className="scroll">
        <a href="#Search" className="scroll-to"><i className="fas fa-angle-down"></i></a>
      </div>
    </div>
  );
}

export default Header;
