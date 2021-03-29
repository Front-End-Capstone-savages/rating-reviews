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
        data:[],
        rating:[],
        one:0,
        two:0,
        three:0,
        four:0,
        five:0,

        
    };
   
    // this.change = this.change.bind(this);
    this.start=this.start.bind(this)
   
  
  }
  
  start(key){

    var total = 0
    for (var i = 0 ; i < this.state.rating.length;i++){
        total += parseInt(this.state.rating[i])
    }
   return( key / total )*100
    
    
}
  
  componentDidMount() {
      this.getReviewsDataFromAPi()
      this.rting()
      this.start()
  }
  getReviewsDataFromAPi() {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=11015`, {headers:{
          'Authorization': `${TOKEN}`

      }})
      .then((res)=> {
          var x=res.data.characteristics
         var y= Object.values(x)
          this.setState({data:y})
        
          
          console.log("helloooooooo",res.data.characteristics)
      }).catch((err)=> {
          console.log(err.message)
      })
  }
  rting(){
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=11015`, {headers:{
        'Authorization': `${TOKEN}`

    }})
    .then((res)=> {
        var x=res.data.ratings
       var y= Object.values(x)
        this.setState({rating:y})
      
        
        console.log("hellooooooooo",y)
    }).catch((err)=> {
        console.log(err.message)
    })

  }
 

  render(){   
    var sum = 0;
    var num = 0;
    const ratingsavg = this.state.rating;
    for (var key in ratingsavg) {
      sum += (key * ratingsavg[key]);
      num += parseInt(ratingsavg[key]);
    }
    const stavg = (sum / num).toFixed(2);
    const StarsPercentage =( (stavg / 5) * 100).toFixed(2);


    var tot =0
    var toty=0
    const size=this.state.data
    for(var j in size){
        tot+=(j*size[key])
        toty+= parseInt(size[key])
    }
    const avg=(tot/toty).toFixed(2)
    
 

   return (
       
         <div className="container-fluid">
             
            
        <div className="fixed-top">
           
          <strong className="rt">RATING&REVIEWS</strong>
         
            
           <div className="start"> 
           
           <p className="count">{stavg}</p>
           <div className="test">
           
               <ReactStars  activeColor="black"  size={24}   values={stavg}  /> 
               {console.log("dali",parseInt(Object.values(this.state.rating)))}
               </div>
               </div>
             
               {console.log(parseInt(this.state.rating[0]))}
                
                  
                
                 <div className="progbar" >
                     
                 
                 <strong className="strong">{StarsPercentage}% of reviews recommend this product</strong>  
                 <div className="bar1">
                    <ProgressBar striped variant="dark"  now={this.start(5)}  />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>5 start</u> </button>
               </div>
                <div className="bar1">
                    <ProgressBar striped variant="dark" now={this.start(4)} />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>4 start</u> </button>
               </div>
                
               <div>
                    <ProgressBar striped variant="dark" now={this.start(3)} width={10}  />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>3 start</u> </button>
               </div>
               <div>
                    <ProgressBar striped variant="dark" now={this.start(2)} />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>2 start</u> </button>
               </div>
               <div>
                    <ProgressBar striped variant="dark" now={this.start(1)} />
                    <button type="button" className="btn btn-link Start-button-rating-tab"><u className='njoum'>1 start</u> </button>
               </div>
                </div>
                
            <div className='rangy'>
                <div className="bar1">
                    <p className='sliderP'>Size</p>
                   <input type="range" min="1" max="100" className="slider" id="myRange" value={avg}/>
                    
                </div>
                <br/>
                <div className="bar">
                    <p className='sliderP1'>Comfort</p>
                    <input type="range" min="1" max="100" className="slider1" id="myRange" value={avg}  ></input>
                </div>
                
            </div>
        </div> </div>
    )
}
}
