// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import gamesList from '../../data/games';
import charactersList from '../../data/characters-full';

import Header from '../Header';

// == Composant
class App extends React.Component {
  state = {
    game: '',
    search: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (evt) => {
      if (evt.key === 'Escape') {
        this.setState({
          search: '',
          game: '',
        });
      }
    });
  }

  componentDidUpdate() {
    const { game } = this.state;
    document.title = `oFig - ${game}`;
  }

  setSearch = (search) => {
    this.setState({
      search,
    });
  };

  changeGame = (game) => {
    this.setState({
      game,
    });
  };

  render() {
    const { game, search } = this.state;

    const filteredCharacters = charactersList.filter(
      (character) => character.game === game,
    );

    const filteredGames = gamesList.filter((currentGame) => {
      const value = search.toLowerCase().trim();
      return currentGame.toLowerCase().includes(value);
    });

    return (
        <div className='app'>
            <Header
                count={filteredGames.length}
                chargeSearch={this.setSearch}
                search={search}
            />
        </div>
    )
    }
}

// == Export
export default App;