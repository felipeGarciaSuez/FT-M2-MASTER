import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className="navClass">
      <img itemID='logoHenry' src={Logo}/>
      <p>Henry - Wheather app</p>
      <SearchBar
      onSearch={onSearch}
      />
    </div>
  );
};

export default Nav;
