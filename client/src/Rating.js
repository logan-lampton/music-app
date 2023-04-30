import axios from "axios";

// Submit the rating
// Update the database existing entry with a patch request
// Display the rating on the screen after it's given

function Rating({ id, rating }) {
  const handleYeah = () => {
    axios
      .patch(`/api/videos/${id}`, {
        rating: "Let's add to the playlist!",
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
        rating: "Not at my wedding!!!",
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
    <>
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
      <div className='approval'>{rating && <h2>{rating}</h2>}</div>
    </>
  );
}

export default Rating;
