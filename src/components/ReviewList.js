import React from "react";
import ReviewForm from "./ReviewForm";


//This is my review list.
const ReviewList = (props) => {
 const reviews = props.reviews;
 const reviewlist = reviews.map((review) => <li>{review}</li>);
  return (
   <>
     <div id="review-list">
       <ul>{reviewlist}</ul>
     </div>
   </>
 );
};

export default ReviewList;