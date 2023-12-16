import { createContext } from "react";

const mixtapeContext = createContext({
  songs: null,
  genre: "all",
  sortOrder: "ascending",
  // Définissez les fonctions de mise à jour
  setGenre: (genre) => {
    // Mettre à jour l'état du genre
    context.setState({ genre });
  },
  setSortOrder: (sortOrder) => {
    // Mettre à jour l'état de l'ordre de tri
    context.setState({ sortOrder });
  },
});

export default mixtapeContext;
