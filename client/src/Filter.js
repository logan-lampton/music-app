import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function Filter({ data }) {
  //   const options = ["Love Em", "Hate Em"];
  //   const [myValue, setMyValue] = useState(options[0]);
  //   const [toggle, setToggle] = useState(false);

  const [buttonA, setButtonA] = useState(true);
  const [buttonB, setButtonB] = useState(false);
  const [buttonC, setButtonC] = useState(false);

  const selectedSongs = data.map((song) => {
    const { id, artist, title, rating } = song;
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
    const { id, artist, title, rating } = song;
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

  const notRated = data.map((song) => {
    const { id, artist, title, rating } = song;
    if (!rating) {
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
            {buttonA && (
              <Button
                variant='contained'
                color='success'
                className='yes'
                onClick={() => {
                  setFilteredSongs(rejectedSongs);
                  setButtonA(false);
                  setButtonB(true);
                }}
              >
                Love Em!
              </Button>
            )}
            {buttonB && (
              <Button
                variant='contained'
                color='error'
                className='no'
                onClick={() => {
                  setFilteredSongs(notRated);
                  setButtonB(false);
                  setButtonC(true);
                }}
              >
                Hate Em!
              </Button>
            )}
            {buttonC && (
              <Button
                variant='contained'
                color='info'
                className='no'
                onClick={() => {
                  setFilteredSongs(selectedSongs);
                  setButtonC(false);
                  setButtonA(true);
                }}
              >
                Still Need to Rate
              </Button>
            )}
            {filteredSongs.length <= 0 ? (
              <h4>{selectedSongs}</h4>
            ) : (
              <h4>{filteredSongs}</h4>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Filter;
