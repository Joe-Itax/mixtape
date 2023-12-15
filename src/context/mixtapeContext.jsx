import { createContext } from 'react';

const mixtapeContext = createContext({
  genre: 'all',
  sortOrder: 'ascending',
});

export default mixtapeContext;
