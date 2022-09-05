import React from "react";

class Stars extends React.Component {
    constructor(props) {
      super(props)
      this.state = { addStars: "", stars: [] };
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
      this.rating = props.stars;
    }

    addValue(event) {
      event.preventDefault();
      let stars = this.state.stars;
      let addStars = this.state.addStars;
      Stars.addValue = ({ name: addStars });
      this.setState({ stars: this.value });
      console.log(stars);
    }
    updateInput(event) {
      this.setState({ addStars: event.target.value });
    };
  render() {
    
    return (
      <div>
        <div id="stars">
          <h5>Rating: {this.rating}</h5>
  
          <select name="star-rating" id="star-rating" onChange={this.updateInput}>
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
            onClick={this.addValue}
          />
        </div>
      </div>
    );}
  };


export default Stars;