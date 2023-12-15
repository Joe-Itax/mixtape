import React from "react";
import { useContext } from "react";
import { Song } from "./Song";
import mixtapeContext from "./context/mixtapeContext";

export const SongList = () => {
  // Your code here! ✨
  const mix = useContext(mixtapeContext);
  const songs = mix.songs;
  return (
    <>
      <h2>TODO: Update taste in music...?</h2>
      {songs.map((song, index) => (
        <Song
          name={song.name}
          artist={song.artist}
          genre={song.genre}
          year={song.year}
          key={index}
        />
      ))}
    </>
  );
};
