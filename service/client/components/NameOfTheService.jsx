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
        rating1:2,
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
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=11002`, {headers:{
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
         <div className="container-fluid">
        <div className="fixed-top">
           {console.log("mystate",this.state.data)}
          <strong>RATING&REVIEWS</strong>
        <div className="star-rating">  
            
           <div className="start"> 
           
           <p className="count">3.5</p>
               <ReactStars  activeColor="black" onChange={ratingChanged} size={24}  fractions={2}     onClick={(i) => this.change(i +1)}/> 
               
               </div>
             
               
                
                  
                
                 <div className="progbar" >
                     
                 
                 <strong>100% of reviews recommend this product</strong>  
                 <div className="bar1">
                    <ProgressBar striped variant="dark" now={70} />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>5 start</u> </button>
               </div>
                <div className="bar1">
                    <ProgressBar striped variant="dark" now={60} />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>4 start</u> </button>
               </div>
                
               <div>
                    <ProgressBar striped variant="dark" now={50} width={10}  />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>3 start</u> </button>
               </div>
               <div>
                    <ProgressBar striped variant="dark" now={40} />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>2 start</u> </button>
               </div>
               <div>
                    <ProgressBar striped variant="dark" now={30} />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>1 start</u> </button>
               </div>
                </div>
                </div>
            <div>
                <div className="bar1">
                    <p className='sliderP'>Size</p>
                    <input type="range" min="1" max="100" className="slider" id="myRange"></input>
                    
                </div>
                <br/>
                <div className="bar">
                    <p className='sliderP1'>Comfort</p>
                    <input type="range" min="1" max="100" className="slider1" id="myRange"  ></input>
                </div>
                
            </div>
        </div> </div>
    )
}
}
