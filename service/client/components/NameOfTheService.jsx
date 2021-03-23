import React from "react";
import StarRatings from 'react-star-ratings';
import Rating from "react-rating";
import { ProgressBar } from 'react-bootstrap';


export default class StarRating extends React.Component{
  constructor() {
    super();

    this.state = {
        rating1:0,
        setRating1:0,
        
    };
   
  }

  render(){
   return (
        <div className="left-container">
            <div className="star-rating">
                <Rating
                    fractions={2}
                    initialRating={ 3.5+this.state.rating1}  
                />
                 <strong>100% of reviews recommend this product </strong>
                 <div className="progbar">
                <div>
                    <ProgressBar striped variant="dark" now={60} />
                    <strong className='index'>4 stars</strong>
               </div>
                
               <div>
                    <ProgressBar striped variant="dark" now={50} />
                    <strong className='index'>3 stars</strong>
               </div>
               <div>
                    <ProgressBar striped variant="dark" now={40} />
                    <strong className='index'>2 stars</strong>
               </div>
               <div>
                    <ProgressBar striped variant="dark" now={30} />
                    <strong className='index'>1 stars</strong>
               </div>
                </div>
                </div>
            <div>
                <div className='avrg-container'>
                {/* <strong className='index'>5 stars</strong> */}
                    <div className="avrg">
                    <div className="stars5"></div>
                    </div>
                </div>

                <div className='avrg-container'>
                {/* <strong className='index'>4 stars</strong> */}
                    <div className="avrg">
                    <div className="stars4"></div>
                    </div>
                </div>

                <div className='avrg-container'>
                {/* <strong className='index'>3 stars</strong> */}
                    <div className="avrg">
                      <div className="stars3"></div>
                    </div>
                </div>

                <div className='scoreBar-container'>
                {/* <strong className='index'>2 stars</strong> */}
                    <div className="scoreBar">
                          <div className="stars2"></div>
                    </div>
                </div>

                <div className='scoreBar-container'>
                {/* <strong className='index'>1 stars</strong> */}
                    <div className="scoreBar">
                      <div className="stars1"></div>
                    </div>
                </div>

            </div>
            <br/><br/>
            <div>
                <div className="slidecontainer">
                    <p className='sliderP'>Size</p>
                    <input type="range" min="1" max="100" className="slider" id="myRange"></input>
                </div>
                <br/>
                <div className="slidecontainer">
                    <p className='sliderP'>Comfort</p>
                    <input type="range" min="1" max="100" className="slider" id="myRange" data-slider-handle="triangle" ></input>
                </div>
            </div>
        </div>
    )
}
}
