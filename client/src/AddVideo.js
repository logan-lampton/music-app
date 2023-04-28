import { useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  artist: "",
  title: "",
  link: "",
};

function AddVideo() {
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
        link: `${values.link}`,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
      .then(setValues(initialState))
      .then(alert(`Thanks for submitting your song from ${artist}. Hope it gets selected!`));
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Song</h2>
      <div>
        <label>Artist:</label>
        <input
          type='text'
          name='artist'
          value={values.artist}
          onChange={handleChange}
        />
        <label>Title:</label>
        <input
          type='text'
          name='title'
          value={values.title}
          onChange={handleChange}
        />
        <label>Link:</label>
        <input
          type='text'
          name='link'
          value={values.link}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default AddVideo;
