import React from "react";
import { useContext } from "react";
import mixtapeContext from "./context/mixtapeContext";

export default function Controls() {
  const mix = useContext(mixtapeContext);

  // const [genre, setGenre] = useState(mix.genre);
  console.log("mix: " + mix.sortOrder);

  // console.log("mix genre: " + mix.genre);
  // const [sortOrder, setSortOrder] = useState(mix.sortOrder);
  return (
    <div className="controls">
      {/* TODO: add some controls! */}
      TODO: Genre control? Sort order control?
      <select>
        <option value="all">all</option>
        <option value="hip-hop">hip hop</option>
        <option value="rap">rap</option>
        <option value="rock">rock</option>
        <option value="pop">pop</option>
      </select>
    </div>
  );
}
