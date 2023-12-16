import React from "react";
import { useContext } from "react";
import { Song } from "./Song";
import mixtapeContext from "./context/mixtapeContext";

export const SongList = () => {
  const mix = useContext(mixtapeContext);
  const songs = mix.songs;
  const filteredAndSortedSongs = (songs, genre, sortOrder) => {
    const filteredSongs = songs.filter(
      (song) => song.genre === genre || genre === "all",
    );
    return sortOrder === "ascending"
      ? filteredSongs.sort((a, b) => a.year - b.year)
      : filteredSongs.sort((a, b) => b.year - a.year);
  };

  return (
    <>
      <h2>Update taste in music...?</h2>
      {filteredAndSortedSongs(songs, mix.genre, mix.sortOrder).map(
        (song, index) => (
          <Song
            key={index}
            name={song.name}
            artist={song.artist}
            genre={song.genre}
            year={song.year}
          />
        ),
      )}

      {/* {mix.genre === "all" &&
        songs.map((song, index) => (
          <Song
            name={song.name}
            artist={song.artist}
            genre={song.genre}
            year={song.year}
            key={index}
          />
        ))}
      {mix.genre === "hip hop" &&
        songs
          .filter((song) => song.genre === "hip hop")
          .map((song, index) => (
            <Song
              name={song.name}
              artist={song.artist}
              genre={song.genre}
              year={song.year}
              key={index}
            />
          ))}
      {mix.genre === "pop" &&
        songs
          .filter((song) => song.genre === "pop")
          .map((song, index) => (
            <Song
              name={song.name}
              artist={song.artist}
              genre={song.genre}
              year={song.year}
              key={index}
            />
          ))}
      {mix.genre === "rap" &&
        songs
          .filter((song) => song.genre === "rap")
          .map((song, index) => (
            <Song
              name={song.name}
              artist={song.artist}
              genre={song.genre}
              year={song.year}
              key={index}
            />
          ))}
      {mix.genre === "rock" &&
        songs
          .filter((song) => song.genre === "rock")
          .map((song, index) => (
            <Song
              name={song.name}
              artist={song.artist}
              genre={song.genre}
              year={song.year}
              key={index}
            />
          ))}
      {mix.sortOrder === "ascending"
        ? mix.songs
            // .slice() // Créer une copie du tableau
            .sort((a, b) => a.year - b.year)
            .map((song, index) => (
              <Song
                name={song.name}
                artist={song.artist}
                genre={song.genre}
                year={song.year}
                key={index}
              />
            ))
        : mix.songs
            // .slice() // Créer une copie du tableau
            .sort((a, b) => b.year - a.year)
            .map((song, index) => (
              <Song
                name={song.name}
                artist={song.artist}
                genre={song.genre}
                year={song.year}
                key={index}
              />
            ))} */}
    </>
  );
};
