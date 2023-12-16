import React, { useState } from "react";
import MixtapeProvider from "./components/MixtapeProvider";
import { SongList } from "./SongList";
import Controls from "./Controls";
const songs = [
  {
    artist: "Smash Mouth",
    genre: "pop",
    name: "All Star",
    year: 1999,
  },
  {
    artist: "Drake",
    genre: "rap",
    name: "Hotline Bling",
    year: 2015,
  },
  {
    artist: "Lizzo",
    genre: "hip hop",
    name: "Juice",
    year: 2019,
  },
  {
    artist: "Rick Astley",
    genre: "rock",
    name: "Never Gonna Give You Up",
    year: 1987,
  },
  {
    artist: "4 Non Blondes",
    genre: "rock",
    name: "What's Up",
    year: 1993,
  },
];

function App() {
  const [genre, setGenre] = useState("all");
  const [sortOrder, setSortOrder] = useState("ascending");

  return (
    <MixtapeProvider songs={songs} genre={genre} sortOrder={sortOrder}>
      <div className="app">
        <h1 className="heading">My 🔥 Mixtape 🎶</h1>
        {/* TODO: make some music...? 🎶 */}
      </div>
      <Controls
        onSetChange={(selections) => {
          setGenre(selections.genre);
          setSortOrder(selections.sortOrder);
        }}
      />
      <SongList songs={songs} />
    </MixtapeProvider>
  );
}

export default App;
