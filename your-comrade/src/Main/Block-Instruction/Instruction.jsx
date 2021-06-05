import './style-instuction.css';

function Instruction () {
  return(
    <div className="instuction" id="Instruction">
      <h1 className="instuction__title">Инструкция</h1>
      <ul className="instuction__list">
        <li className="instuction__item"><i className="fas fa-tools"></i> В разделе &#8275;Раздел Поиска&#8275; в поле для ввода, введите Никнейм игрока которого хотите посмотреть статистику.</li>
        <li className="instuction__item"><i className="fas fa-tools"></i> В конце информации об игроке у вас будет возможность сохранить его в избранные. В дальнейшем в &#8275;Разделе Избранные&#8275; сможете посмотреть сохраненных игроков и связаться с ними в игре.</li>
        <li className="instuction__item"><i className="fas fa-tools"></i> Прошу обратить внимание поиск игроков учитывает строгое написание никнейма игрока если идет названия с большой буквы нужно так и вводить.</li>
        <li className="instuction__item"><i className="fas fa-tools"></i> Статистика игрока выводиться согласно данных полученных с игры &#8275;WORLD OF TANKS&#8275; Данная информация отвечает реальной статистики игры игрока и мы никак не можем на ее влиять.</li>
        <li className="instuction__item"><i className="fas fa-tools"></i> Рекомендуем обратить внимание на общий рейтинг от &#8275;World of Tanks &#8275; если меньше 4000 при боях более 1000 этот игрок только начал играть и розберается в игре. Рекомендуем играть с игроками у которых рейтинг от 4000.</li>
        <li className="instuction__item"><i className="fas fa-tools"></i> Рекомендуется обращать внимание на средний урон и выживаемость в боях.</li>
      </ul>
    </div>
  );
}

export default Instruction;