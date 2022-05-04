import React from "react";
import Card from "./Card";
import Sdata from './Sdata';


const Service = ()=>
{
return (
<>
<div className="container">
<div className="row">
<h2 className="text-center head_service my-3">Our Services</h2>    
</div>
<div className="row">
<div className="col-11 mx-auto">
<div className="row mx-auto">
{
Sdata.map((val,ind)=> 
{
return(
<>
<div className="col-md-4 mb-3">
<Card
 title = {val.title}
 imgsrc = {val.image}
 key = {ind}
/>  
</div>  
</>  
)
})   
}
</div>
</div>
</div>    
</div>
</>  
)
}
export default Service;