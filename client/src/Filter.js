import { useState } from "react";

function Filter({ data }) {
  //   const [filteredSongs, setFilteredSongs] = useState(null);

  //   const filterByRating = data.map((song) => {
  //     const { id, artist, title, link, rating } = song;
  //     if (rating === "Let's add to the playlist!") {
  //       setFilteredSongs(
  //         <div key={id}>
  //           <p>
  //             Artist: {artist} - Song: {title}
  //           </p>
  //         </div>
  //       );
  //     }
  //     if (rating === "Not at my wedding!!!") {
  //       setFilteredSongs(
  //         <div key={id}>
  //           <p>
  //             Artist: {artist} - Song: {title}
  //           </p>
  //         </div>
  //       );
  //     }
  //   });
  const options = ["Filter Songs By Rating", "The Good Stuff", "Rejected"];
  const [myValue, setMyValue] = useState(options[0]);
  const [filteredSongs, setFilteredSongs] = useState(null);

  //   const filterSongs = () => data.map((song) => {
  //     const { id, artist, title, link, rating } = song;
  //   });

  const positiveSongs = data.map((song) => {
    const { id, artist, title, link, rating } = song;
  });

  const testFilter = () => {
    if (myValue === "Filter Songs By Rating") {
      setFilteredSongs(null);
    }
    if (myValue === "The Good Stuff") {
      setFilteredSongs("The Good Songs!");
    }
    if (myValue === "Rejected") {
      setFilteredSongs("The Bad Songs");
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
    </div>
  );
}

export default Filter;
