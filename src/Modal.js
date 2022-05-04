import React from "react";

const Modal = (props)=>
{
return (
<>
<div className="mt-3">
<div className="alert alert-primary mb-3" role="alert">
{'Your name is : '+ props.data.user_name } 
 </div> 
 <div className="alert alert-success mb-3" role="alert">
{'Your email is : '+ props.data.email } 
 </div>  
 <div className="alert alert-danger mb-3" role="alert">
{'Your password is : '+props.data.psw } 
 </div>
 <div className="alert alert-warning" role="alert">
{'Your Mobile no is : '+props.data.mob } 
 </div>    
</div>    
</>    
)
}

export default Modal