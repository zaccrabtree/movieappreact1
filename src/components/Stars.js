import React from "react";

const Stars = (props) => {
    const rating = props.rating;
  
    return (
      <>
        <div id="stars">
          <h5>Rating: {rating}</h5>
  
          <select name="star-rating" id="star-rating">
            <option disabled selected hidden>
              Select
            </option>
            <option value="1">&#9733;</option>
            <option value="2">&#9733; &#9733;</option>
            <option value="3">&#9733; &#9733; &#9733;</option>
            <option value="4">&#9733; &#9733; &#9733; &#9733;</option>
            <option value="5">&#9733; &#9733; &#9733; &#9733; &#9733;</option>
          </select>
  
          <input
            class="btn btn-small btn-info m-2"
            type="submit"
            value="Submit"
          />
        </div>
      </>
    );
  };


export default Stars;