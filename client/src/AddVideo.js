import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const initialState = {
  artist: "",
  title: "",
  link: "",
};

function AddVideo({ setData }) {
  const [values, setValues] = useState(initialState);
  //   const [data, setData] = useState([]);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    console.log(`${inputName}:${inputValue}`);
    setValues({ ...values, [inputName]: inputValue });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { artist, title, link } = values;
    if (!artist || !title || !link) {
      alert("Please make sure to add an artist, title, and link for the song");
    }
    axios
      .post("/api/videos", {
        artist: `${values.artist}`,
        title: `${values.title}`,
        link: `${values.link}?autoplay=1`,
      })
      .then(
        (response) => {
          console.log(response);
          axios.get("/api/videos").then((response) => setData(response.data));
        },
        (error) => {
          console.log(error);
        }
      )
      .then(setValues(initialState))
      .then(
        alert(
          `Thanks for submitting your song from ${artist}. Hope it gets selected!`
        )
      );
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <h2>Add a Song</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component='form'
            sx={{
              "& .MuiTextField-root": { width: "25ch" },
            }}
            noValidate
            autoComplete='off'
            onSubmit={onSubmit}
          >
            <div>
              <TextField
                id='outlined-basic'
                label='Artist'
                variant='outlined'
                name='artist'
                value={values.artist}
                onChange={handleChange}
              />
              <TextField
                id='outlined-basic'
                label='Title'
                variant='outlined'
                name='title'
                value={values.title}
                onChange={handleChange}
              />
              <TextField
                id='outlined-basic'
                label='Link'
                variant='outlined'
                name='link'
                value={values.link}
                onChange={handleChange}
              />
            </div>
            <Button variant='contained'>Submit</Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AddVideo;
