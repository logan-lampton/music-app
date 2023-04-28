import React from "react";

// Submit the rating
// Update the database existing entry with a patch request
// Display the rating on the screen after it's given

function Rating() {

  return (
    <div className='rating'>
      <h2>Worth Playing at our wedding?</h2>
      <div>
        <p className='yeah'>Heck yeah!</p>
        <p className='no'>No way!</p>
      </div>
    </div>
  );
}

export default Rating;
