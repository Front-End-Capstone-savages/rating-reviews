import React from "react";
import StarRatings from 'react-star-ratings';
import Rating from "react-rating";
import { ProgressBar } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import Progressbar from "@ramonak/react-progress-bar";
import axios from "axios";
import TOKEN from "../config/config.js";



export default class StarRating extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        rating1:0,
        data:[]
        
    };
    this.change = this.change.bind(this);
   
  }
  change(rating1) {
    this.setState({ [this.state.data.count]:rating1 });// fix it pixa it's missing something :p Houda passed by here :)
  }
  componentDidMount() {
      this.getReviewsDataFromAPi()
  }
  getReviewsDataFromAPi() {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=11001`, {headers:{
          'Authorization': `${TOKEN}`

      }})
      .then((res)=> {
          this.setState({data:res.data})
          console.log(res.data)
      }).catch((err)=> {
          console.log(err.message)
      })
  }

  render(){
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    
   return (
   
        <div className="left-container">
           {console.log("mystate",this.state.data)}
          <strong>RATING&REVIEWS</strong>
            <div className="star-rating">  
            <strong>{this.state.data.count}</strong><ReactStars  activeColor="black" onChange={ratingChanged} size={24}  fractions={2}  initialRating={ 3.5 +this.state.rating1}   onClick={(i) => this.change(i +1)}/>
             
               
                
                  
                
                 <div className="progbar" >
                     
                 
                 <strong>100% of reviews recommend this product</strong>  
                 <div className="bar1">
                    <ProgressBar striped variant="dark" now={70} />
                    <strong className='index'>5 stars</strong>
               </div>
                <div className="bar1">
                    <ProgressBar striped variant="dark" now={60} />
                    <strong className='index'>4 stars</strong>
               </div>
                
               <div>
                    <ProgressBar striped variant="dark" now={50} width={10}  />
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
