import { useState } from "react";

function Filter({ data }) {
  const options = ["Filter Songs By Rating", "Love Em", "Hate Em"];
  const [myValue, setMyValue] = useState(options[0]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  const selectedSongs = data.map((song) => {
    const { id, artist, title, link, rating } = song;
    // console.log(rating);
    if (rating === "Let's add to the playlist!") {
      return (
        <div key={id}>
          <p>
            {artist} : {title}
          </p>
        </div>
      );
    }
  });

  const rejectedSongs = data.map((song) => {
    const { id, artist, title, link, rating } = song;
    if (rating === "Not at my wedding!!!") {
      return (
        <div key={id}>
          <p>
            {artist} - {title}
          </p>
        </div>
      );
    }
  });

  const filterSongs = (value) => {
    if (value === "Filter Songs By Rating") {
      setFilteredSongs([]);
    }
    if (value === "Love Em") {
      setFilteredSongs(selectedSongs);
    }
    if (value === "Hate Em") {
      setFilteredSongs(rejectedSongs);
    }
  };

  return (
    <>
      <div>
        <select
          onChange={(e) => {
            setMyValue(e.target.value);
            filterSongs(e.target.value);
          }}
        >
          {options.map((option, idx) => (
            <option key={idx}>{option}</option>
          ))}
        </select>
        <h4>{filteredSongs}</h4>
      </div>
    </>
  );
}

export default Filter;
