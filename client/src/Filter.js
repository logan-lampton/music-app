import { useState } from "react";

function Filter({ data }) {
  const options = ["Filter Songs By Rating", "The Good Stuff", "Rejected"];
  const [myValue, setMyValue] = useState(options[0]);
  const [filteredSongs, setFilteredSongs] = useState(null);

  //   const positiveSongs = (data) => {
  //       return data.filter(rating === "Let's add to the playlist!")
  //   }

  const selectedSongs = data.map((song) => {
    const { id, artist, title, link, rating } = song;
    if (rating === "Let's add to the playlist!") {
      return (
        <div key={id}>
          <p>
            {artist} - {title}
          </p>
        </div>
      );
    }
  });

  const rejectedSongs = data.map((song) => {
    const { id, artist, title, link, rating } = song;
    if (rating === "Rejected") {
      return (
        <div key={id}>
          <p>
            {artist} - {title}
          </p>
        </div>
      );
    }
  });

  const testFilter = () => {
    if (myValue === "Filter Songs By Rating") {
      setFilteredSongs(null);
    }
    if (myValue === "The Good Stuff") {
      setFilteredSongs(selectedSongs);
    }
    if (myValue === "Rejected") {
      setFilteredSongs(rejectedSongs);
    }
  };

  return (
    // <div>
    //   <select>
    //     <option value='blank'>Filter Songs By Rating</option>
    //     <option value='yes'>The Good Stuff</option>
    //     <option value='no'>Rejected</option>
    //   </select>
    //   {filteredSongs}
    // </div>
    <div>
      <select
        onChange={(e) => setMyValue(e.target.value)}
        defaultValue={myValue}
      >
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>

      <h2>{filteredSongs}</h2>
      <h2>{selectedSongs}</h2>
    </div>
  );
}

export default Filter;
