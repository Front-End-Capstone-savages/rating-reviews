import React from "react";
import Rating from "react-rating";
import StarRating from "./components/NameOfTheService.jsx";
import { ProgressBar } from "react-bootstrap";
import ListReview from "./components/Reviewlist.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="render">
          <ListReview />
          <div className="render1">
            {" "}
            <StarRating />
          </div>
        </div>
      </div>
    );
  }
}
