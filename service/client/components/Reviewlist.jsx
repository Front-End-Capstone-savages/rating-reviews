import React from "react";
import ReactStars from "react-rating-stars-component";
import TOKEN from "../config/config.js";
import Ratings from "./NameOfTheService.jsx"
import axios from "axios"

export default class ListReview extends React.Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            
        }
        
        
    }
    componentDidMount() {
        this.getReviewsDataFromAPi()
    }
    getReviewsDataFromAPi() {
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=11001`, {headers:{
            'Authorization': `${TOKEN}`
  
        }})
        .then((res)=> {
            this.setState({list:res.data.results})
            console.log("state",res.data.results)
        }).catch((err)=> {
            console.log(err.message)
        })
    }
    
  render() {
    
   
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    return (
        <div className='container one-Review-card'>
      <div class="list">
        <div className="row">
          <div className="list1">
            <strong className="str"> reviews, sorted by relevance</strong>
            <ReactStars
                
              activeColor="black"
              onChange={ratingChanged}
              size={24}
            />{" "}
            <p className="use">
              <i className="bi bi-check-circle-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </i>{" "}
              {this.state.list.map((e,i)=>{ {console.log("ddddddd",e.reviewer_name)}})}junuary 1, 2019
            </p>
            
            <div className="title">
              <strong>
                Review title with word-break truncation to prevent wrapping onto
                the next...
              </strong>
              <p className="line">...line , if necessary</p>
               
            </div>{" "}
            <div className='row reviews-buttons-space'>
     <button className='review-buttons-type' >More Reviews</button>
         <button className='review-buttons-type'>Add A Review <span style={{marginLeft:'9px',fontSize:'22px'}}>+</span></button>
                                    </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
