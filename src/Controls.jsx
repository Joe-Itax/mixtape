import React from "react";
import { useContext, useState } from "react";
import mixtapeContext from "./context/mixtapeContext";

export default function Controls({ onSetChange }) {
  const mix = useContext(mixtapeContext);
  const [selectedGenre, setSelectedGenre] = useState(mix.genre);
  const [sortOrder, setSortOrder] = useState(mix.sortOrder);
  const [isAscending, setIsAscending] = useState(false);
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value); // Mettre à jour l'état local
  };

  const handleSortOrderChange = () => {
    setSortOrder(isAscending ? "ascending" : "descending"); // Mettre à jour l'état local
    setIsAscending(!isAscending);
  };

  // Transmettre les sélections au composant parent si nécessaire
  if (onSetChange) {
    onSetChange({ genre: selectedGenre, sortOrder });
  }
  return (
    <div className="controls">
      <h2>Genre control? Sort order control?</h2>
      <select onChange={handleGenreChange}>
        <option value="all">All</option>
        <option value="hip hop">hip hop</option>
        <option value="rap">rap</option>
        <option value="rock">rock</option>
        <option value="pop">pop</option>
      </select>
      <button onClick={handleSortOrderChange}>{sortOrder}</button>
    </div>
  );
}
