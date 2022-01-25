// == Import
import './styles.scss';
// == Composant
const Games = ({ list, changeGame }) => (
  <ul className="games">
    {list.map((game) => (
      <li key={game} className="game">
        <a className="game-link" onClick={() => changeGame(game)}>
          {game}
        </a>
      </li>
    ))}
  </ul>
);

// == Export
export default Games;