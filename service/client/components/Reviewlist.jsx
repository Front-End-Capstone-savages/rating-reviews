import React from "react";
import ReactStars from "react-rating-stars-component";
import TOKEN from "../config/config.js";
import AddReview from "./AddReview.jsx";
import Recommend from './Recommend.jsx';


import axios from "axios";


export default class ListReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      addreview: "hidden",
      revlist: 2,
      help:0,
      retport:'Report',
      value:'',
      filterData:[]
      
    };
    this.addrerevies = this.addrerevies.bind(this);
    this.addsomreviews = this.addsomreviews.bind(this);
    this.putHelpfuls=this.putHelpfuls.bind(this)
    this.updatHelpfuness=this.updatHelpfuness.bind(this)
    this.report=this.report.bind(this)
    this.reporty = this.reporty.bind(this)
  }
  componentDidMount() {
    this.getReviewsDataFromAPi();
    this.getimage()
  }
  updatHelpfuness(){
    this.setState({help:this.state.help +1})
  }
  reporty(){
    this.setState({retport:'Reported!'})
  }

  report(id){
    axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${id}/report`,this.state.retport,
      {
        headers: {
          Authorization: `${TOKEN}`,
        },
      }
    ).then((res)=>{
      console.log('my put request : => ',res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  componentDidUpdate(){
    this.putHelpfuls()

  }

getimage(){
  axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=11015`,
        {
          headers: {
            Authorization: `${TOKEN}`,
          },
        }
      )
      .then((res) => {
        this.setState({ list: res.data.results });
        this.setState({filterData:res.data.results})
        console.log("statemeeee", res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });

}


putHelpfuls(id){

  axios
      .put(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${id}/helpful`,this.state.help,
        {
          headers: {
            Authorization: `${TOKEN}`,
          },
        }
      ).then((res)=>{
        console.log('my put request : => ',res)
      }).catch((err)=>{
        console.log(err)
      })
      

}

  getReviewsDataFromAPi() {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=11015`,
        {
          headers: {
            Authorization: `${TOKEN}`,
          },
        }
      )
      .then((res) => {
        this.setState({ list: res.data.results });
        console.log("state", res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  addrerevies() {
    this.setState({ addreview: "shown" });
  }
  addsomreviews() {
    axios
      .post(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=11015`,
        {
          headers: {
            Authorization: `${TOKEN}`,
          },
        }
      )
      .then((res) => {
        this.setState({ data: res.data.results });
        console.log("body", res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
 
  render() {
    console.log(this.state.list.review_id,'dfdfdfdf')
    const { list, revlist } = this.state;
    const rev = this.state.list.filter((e, i) => i < this.state.revlist);
console.log("list", this.state.list)
    return (
      
      <div className="container">
        {console.log(list.helpfulness)}
        <div class="list">
          <div className="row">
            <div className="list1">
              <div className="title">
                {rev.map((e) => (
                  <div key={e.review_id}>
                    <strong className="str">
                      {list.length} reviews, sorted by relevance
                    </strong>
                    
                    <ReactStars activeColor="black" size={24}  edit={false} value={e.rating}/>

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
                    <Recommend recommend={e.recommend} className="review-recommend" />
                    <img src={e.photos.map(x=>x.url)} className="img" alt="..."></img>
                    
                    
                    helpful?
                    <button
                      type="button"
                      className="btn btn-link Start-button-rating-tab"
                      onClick={()=>this.putHelpfuls(e.review_id)}
                    >
                      <u className="yes">yes</u>{" "}
                    </button>
                    ({e.helpfulness})
                    <button
                      type="button"
                      className="btn"
                      onClick={()=>this.report(e.review_id)}
                    >
                      <u className="rep" onClick={()=>this.reporty()}>{this.state.retport}</u>{" "}
                    </button>
                    <hr style={{ width: "100%", color: "black" }} />
                  </div>
                ))}
              </div>{" "}
              <div className="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon"  onChange={(x)=>{this.setState({value:x.target.value})}}/>
  <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
  </span>
  <div> 
  { this.state.value.length >= 3 ?(<ul>
    {this.state.list.filter((el)=> el.body.includes(this.state.value)).map((x=><div key={x.review_id}>
        <a>{x.body}</a>
        <a>{x.reviewer_name}</a>
        <a>{x.summary}</a>
      </div>
      
    
    
    ))}
      </ul>
      ) : (
        ""
      )  }
     
           
  </div>
</div>
              <div className="row reviews-buttons-space">
                <button
                  className="review-buttons-type"
                  onClick={() => this.setState({ revlist: revlist + 2 })}
                  style={{maxHeight: '40px'}}
                >
                  More Reviews
                </button>
                <button
                  className="review-buttons-type"
                  onClick={this.addrerevies}
                  style={{maxHeight: '40px'}}
                >
                  Add A Review{" "}
                  <span style={{ marginLeft: "9px", fontSize: "22px" }}>+</span>
                </button>
                {this.state.addreview === "shown" && <AddReview />}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
