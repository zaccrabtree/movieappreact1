import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <form id="review-form" onSubmit={this.handleSubmit}>
          <h5>Add A Review</h5>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter your review"
            name="review-text"
            rows="2"
            cols="30"
          ></textarea>
          <br />
          <br />
  
          <input class="btn btn-small btn-info" type="submit" value="Submit" />
        </form>
      );
    }
  }


export default ReviewForm;