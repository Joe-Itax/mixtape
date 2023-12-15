import React from 'react';
import { Song } from './Song';

export const SongList = ({ songs }) => {
  // Your code here! ✨
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
