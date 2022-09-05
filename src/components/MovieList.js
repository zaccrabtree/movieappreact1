import React from 'react';
import Stars from "./Stars.js";
import ReviewForm from "./ReviewForm";


const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
        		<div className="container" key={index}>
          			<div className="row">
            			<div className="col-md-2 image-container m-4">
              				<img src={movie.Poster} alt="movie" width="150px"></img>
            			</div>
            			<div className="col-md-10 justify-content-start m-4">
							<h2>{movie.Title}</h2>
              				<Stars rating={movie.Rating} />
              				<ReviewForm />
            			</div>
						
						
						
          			</div>
        		</div>
      		))}
	  </>
	);
};

export default MovieList;
