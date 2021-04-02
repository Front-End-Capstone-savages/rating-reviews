import React from "react";
import Rating from "react-rating";
import StarRating from "./components/NameOfTheService.jsx";
import { ProgressBar } from "react-bootstrap";
import ListReview from "./components/Reviewlist.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div className="App container ">
        <div className=" row render">
          <div className ="col-3"> <StarRating /> </div>
          <div className ="col-7"> <ListReview /> </div>
          </div>
          <div className="render1">
            {" "}
           
          
        </div>
        <p></p>
      </div>
    );
  }
}
