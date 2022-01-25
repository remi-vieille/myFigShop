// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Header = ({ count, search, changeSearch }) => (
    <header className='header'>
        <h1 className="header-title">oFig - nintendo</h1>
        <p className="header-baseline">{count} Jeux</p>
        <input 
            type="text"
            className='header-search'
            value={search}
            placeholder='Rechercher...'
            onChange={(evt) => changeSearch(evt.target.value)}
        />
    </header>
);

// == Export
export default Header;