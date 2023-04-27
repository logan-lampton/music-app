import { useState, useEffect } from "react";

const initialState = {
  name: "",
  link: "",
};

function AddVideo() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    console.log(`${inputName}:${inputValue}`);
    setValues({ ...values, [inputName]: inputValue });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
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
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default AddVideo;
