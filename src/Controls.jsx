import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import MixtapeProvider from './components/MixtapeProvider';

function Controls() {
  const mix = useContext(MixtapeProvider);
  // const [genre, setGenre] = useState(mix.genre);
  console.log('mix genre: ' + mix);
  // const [sortOrder, setSortOrder] = useState(mix.sortOrder);

  return (
    <div className="controls">
      {/* TODO: add some controls! */}
      TODO: Genre control? Sort order control?
      <select>
        <option value="all">ALL</option>
        <option value="hip-hop">hip hop</option>
        <option value="rap">rap</option>
        <option value="rock">rock</option>
        <option value="pop">pop</option>
      </select>
    </div>
  );
}

export default Controls;
