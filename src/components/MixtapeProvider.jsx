import mixtapeContext from '../context/mixtapeContext';
import { useState } from 'react';
import { useContext } from 'react';

function MixtapeProvider({ children, songs }) {
  const [genre, setGenre] = useState('all');
  const [sortOrder, setSortOrder] = useState('ascending');
  return (
    <mixtapeContext.Provider
      value={{ songs, genre: genre, sortOrder: sortOrder }}
    >
      {children}
    </mixtapeContext.Provider>
  );
}

export default MixtapeProvider;
