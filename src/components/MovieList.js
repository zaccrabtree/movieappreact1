import React from 'react';
import ReviewForm from "./ReviewForm";

//This is my MoveList component.
const MovieList = (props) => {
	

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
              				<ReviewForm />
            			</div>
						
						
						
          			</div>
        		</div>
      		))}
	  </>
	);
};

export default MovieList;
