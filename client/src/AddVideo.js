import { useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  name: "",
  link: "",
};

function AddVideo() {
  const [values, setValues] = useState(initialState);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    console.log(`${inputName}:${inputValue}`);
    setValues({ ...values, [inputName]: inputValue });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, link } = values;
    if (!name || !link) {
      alert("Please make sure to add a name and link for the song");
    }
    axios
      .post("/api/videos", {
        name: `${values.name}`,
        src: `${values.link}`,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    //   .then(
    //     axios.get("/api/videos").then((response) => setData(response.data))
    //   );
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Song</h2>
      <div>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={values.name}
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
