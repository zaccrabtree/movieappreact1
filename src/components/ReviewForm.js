import React from "react";

  class ReviewForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { addReview: "", reviews: [{ name: "" }] };
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }
  
    addValue(event) {
      event.preventDefault();
  
      let reviews = this.state.reviews;
      let addReview = this.state.addReview;
      reviews.push({ name: addReview });
      this.setState({ reviews: reviews });
      console.log(reviews);
    }

    updateInput(event) {
      this.setState({ addReview: event.target.value });
    }
  
    render() {
      return (
        <div class="container mt-5 mb-5" id="review-box">
          <div>
            <div id="stars">
              <h5>Rating: {this.rating}</h5>
              <select name="star-rating" id="star-rating" onChange={this.updateInput}>
                <option disabled selected hidden>Select</option>
                <option value="★">&#9733;</option>
                <option value="★★">&#9733; &#9733;</option>
                <option value="★★★">&#9733; &#9733; &#9733;</option>
                <option value="★★★★">&#9733; &#9733; &#9733; &#9733;</option>
                <option value="★★★★★">&#9733; &#9733; &#9733; &#9733; &#9733;</option>
              </select>
              <input
              class="btn btn-small btn-info m-2"
              type="submit"
              value="Submit"
              onClick={this.addValue}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <h1 id="leave-review-head">Leave a Review:</h1>
              <textarea
                id="tex-box"
                type="text"
                rows="4"
                cols="50"
                placeholder="Tell us whether it slapped or stunk."
                onChange={this.updateInput}
              />
              <br />
              <br />
              <button
                className="btn btn-small btn-info m-2"
                value="Submit"
                onClick={this.addValue}
              >Submit
              </button>
            </div>
            <div class="col-sm">
              <h1 id="reviews-head">Reviews:</h1>
              <h1>{this.state.value}</h1>
  
              <p>
                {
                  this.state.reviews.map(function (val) {
                    return <p key={val.name}>{val.name}</p>;
                  })
                }
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

export default ReviewForm;