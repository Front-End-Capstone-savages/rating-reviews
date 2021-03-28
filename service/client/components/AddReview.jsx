import React from 'react'
export default class AddReview extends React.Component {
 render(){
    return (
        <div>
            
        <div>
           
 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{margin:"20px"}}></input>
 <input type="name" class="form-control" id="exampleInputPassword1" placeholder="NickName" style={{margin:"20px"}}></input>
 <input type="imageurl" class="form-control" id="exampleInputPassword1" placeholder="IMAGE URL" style={{margin:"20px"}}></input>
 
   <textarea placeholder={"Why did you like the product or not?"} style={{margin:"20px", position:'relative', top:'-20px'}}/>
   <button >submit</button>
   </div>
        
    </div>
    )
}
}