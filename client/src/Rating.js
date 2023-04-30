import axios from "axios";

// Submit the rating
// Update the database existing entry with a patch request
// Display the rating on the screen after it's given

function Rating({ id }) {
  const handleYeah = () => {
    axios
      .patch(`/api/videos/${id}`, {
        rating: "yes",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleNo = () => {
    axios
      .patch(`/api/videos/${id}`, {
        rating: "no",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className='rating'>
      <h2>Worth Playing at our wedding?</h2>
      <div>
        <p className='yes' onClick={handleYeah}>
          Heck yeah!
        </p>
        <p className='no' onClick={handleNo}>
          No way!
        </p>
      </div>
    </div>
  );
}

export default Rating;
