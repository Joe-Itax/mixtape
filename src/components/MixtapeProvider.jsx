import mixtapeContext from "../context/mixtapeContext";
import { useState } from "react";

// genre,
// setGenre,
// sortOrder,
// setSortOrder,
function MixtapeProvider({ children, genre, songs, sortOrder }) {
  // [genre, setGenre] = useState("all");
  // [sortOrder, setSortOrder] = useState("ascending");
  return (
    <mixtapeContext.Provider
      value={{
        songs: songs,
        genre: genre,
        sortOrder: sortOrder,
      }}
    >
      {children}
    </mixtapeContext.Provider>
  );
}

export default MixtapeProvider;
