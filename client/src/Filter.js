import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function Filter({ data }) {
  //   const options = ["Love Em", "Hate Em"];
  //   const [myValue, setMyValue] = useState(options[0]);
  const [toggle, setToggle] = useState(false);

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
            {artist} : {title}
          </p>
        </div>
      );
    }
  });

  const [filteredSongs, setFilteredSongs] = useState(selectedSongs);

  //   const filterSongs = (value) => {
  //     if (value === "Love Em") {
  //       setFilteredSongs(selectedSongs);
  //     }
  //     if (value === "Hate Em") {
  //       setFilteredSongs(rejectedSongs);
  //     }
  //   };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <h2>Show Songs By Rating</h2>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {/* <select
              onChange={(e) => {
                setMyValue(e.target.value);
                filterSongs(e.target.value);
              }}
            >
              {options.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </select> */}
            {!toggle ? (
              <Button
                variant='contained'
                color='success'
                className='yes'
                onClick={() => {
                  setFilteredSongs(rejectedSongs);
                  setToggle(true);
                }}
              >
                Love Em!
              </Button>
            ) : (
              <Button
                variant='contained'
                color='error'
                className='no'
                onClick={() => {
                  setFilteredSongs(selectedSongs);
                  setToggle(false);
                }}
              >
                Hate Em!
              </Button>
            )}
            <h4>{filteredSongs}</h4>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Filter;
