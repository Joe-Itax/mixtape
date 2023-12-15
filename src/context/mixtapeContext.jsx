import { createContext } from 'react';

const mixtapeContext = createContext({
  songs: null, 
  genre: "all",
  sortOrder: "ascending",
});

export default mixtapeContext;
