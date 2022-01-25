
// == Import
import Character from './Character';
import './styles.scss';

// == Composant
const Characters = ({ list }) => (
    <div className="characters">
      {list.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </div>
  );


// == Export
export default Characters;