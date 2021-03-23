import React from 'react';
import Rating from "react-rating";
import StarRating from './components/NameOfTheService.jsx'
import { ProgressBar } from 'react-bootstrap';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
        rating1:0,
        setRating1:0,
        
    };
   
  }

 

  render() {
    return (
        <div className="App">
    <StarRating/>
        <strong>RATING&REVIEWS</strong>
        <div className="start">
        
            <p>Rating={this.state.rating1}</p>
            </div>
            {/* <div className="progressBar">
        <ProgressBar striped variant="success" now={30} />
        <ProgressBar striped variant="info" now={40} />
        <ProgressBar striped variant="warning" now={50} />
        <ProgressBar striped variant="danger" now={60} />
    </div> */}
    
         
          </div> 
   
          
        
       
        
        
     
    );
  }
}