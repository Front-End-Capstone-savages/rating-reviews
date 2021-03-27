import React from 'react'

export default function AddReview(props) {
    return (
        <div>
            
        <div>
           
 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{margin:"20px"}}></input>
 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="NickName" style={{margin:"20px"}}></input>
   <textarea placeholder={"Why did you like the product or not?"} style={{margin:"20px", position:'relative', top:'-20px'}}/>
   <button >submit</button>
   </div>
        
    </div>
    )
}
