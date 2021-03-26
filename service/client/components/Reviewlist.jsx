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
            addreview:'hidden',
            revlist:2  
        }
        this.addrerevies=this.addrerevies.bind(this)
        this.addsomreviews=this.addsomreviews.bind(this)

    }
    componentDidMount() {
      this.getReviewsDataFromAPi()
    }

    getReviewsDataFromAPi() {
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=11002`, {headers:{
            'Authorization': `${TOKEN}`
        }})
        .then((res)=> {
            this.setState({list:res.data.results})
            console.log("state",res.data.results)
        }).catch((err)=> {
            console.log(err.message)
        })
    }
    addrerevies(){
      this.setState({addreview:'shown'})
    }
    addsomreviews(){
      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=11002`, {headers:{

          'Authorization': `${TOKEN}`
  
      }})
      .then((res)=> {
          this.setState({data:res.data.results})
          console.log('body',res.data.results)
      }).catch((err)=> {
          console.log(err.message)
      })
  
    }
   
  render() {
    console.log(this.state.revlist)
    const {list,revlist} = this.state
    const rev=this.state.list.filter((e,i)=> i< this.state.revlist) 
    
    return (
        <div className='container-fluid'>
      <div class="list">
        <div className="row">
          <div className="list1">
            
              
            <div className="title">
              
              {rev.map((e)=>( <div key={e.review_id}> 
                <strong className="str">{list.length} reviews, sorted by relevance</strong>
            
            <ReactStars
              activeColor="black"
              
              size={24}
            />
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
              </i>
              {e.reviewer_name}, {e.date}
            </p>
                <strong>{e.summary}</strong>
                
                    <p key={e.review_id}>{e.body}</p> 
                    helpful?<button type="button" className="btn btn-link Start-button-rating-tab" ><u className="yes">yes</u> </button>{e.helpfulness}<button type="button" className="btn btn-link Start-button-rating-tab"><u className="rep">Report</u> </button>
                    
               </div>
               
              
              ))}
              
              
              
               
             </div>{" "}
             
            <div className='row reviews-buttons-space'>
            
     <button className='review-buttons-type' onClick={()=>this.setState({revlist:revlist+2})}>More Reviews</button>
         <button className='review-buttons-type' onClick={this.addrerevies}>Add A Review <span style={{marginLeft:'9px',fontSize:'22px'}}>+</span></button>
         {this.state.addreview === 'shown'&&<div>
           
           <textarea placeholder={"Why did you like the product or not?"} />
           <button >submit</button>
           </div>}
                                    </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
