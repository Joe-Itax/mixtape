import mixtapeContext from "../context/mixtapeContext";
import { useState } from "react";

function MixtapeProvider({ children, genre, songs, sortOrder }) {
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
