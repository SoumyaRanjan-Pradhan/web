import React, { useState } from "react";
import coffee from './Image/coffee_girl.jpg';
import Modal from "./Modal";

const Contact = () => {
  const [data, setData] = useState(
    {
     user_name:'',
     email:'',
     psw:'',
     mob:''
    }
  )

  const [raja,setRaja]  = useState(false);

  const mySun = ((e)=>
  {
    
   const name = e.target.name;
   const value = e.target.value;

   if(name === 'user_name')
   {
    setData((pre)=>
    {
     return {
     user_name:value,
     email:pre.email,
     psw:pre.psw,
     mob:pre.mob 
     } 
    }) 
   }

   if(name === 'email')
   {
    setData((pre)=>
    {
     return {
     user_name:pre.user_name,
     email:value,
     psw:pre.psw,
     mob:pre.mob 
     } 
    }) 
   }

   if(name === 'psw')
   {
    setData((pre)=>
    {
     return {
     user_name:pre.user_name,
     email:pre.email,
     psw:value,
     mob:pre.mob 
     } 
    }) 
   }

   if(name === 'mob')
   {
    setData((pre)=>
    {
     return {
     user_name:pre.user_name,
     email:pre.email,
     psw:pre.psw,
     mob:value 
     } 
    }) 
   }
  })

  const myFun = (e)=>
  {
   e.preventDefault();
   if(data.user_name === '')
   {
   alert("Please fill the User name");
   return false;  
   }
   

   
   if(data.email === '')
   {
   alert("Please fill the email");
   return false;

   }

   

   if(data.psw === '')
   {
   alert("Please fill the Password");
   return false;

   }
   if(data.mob === '')
   {
   alert("Please fill the Mobile no");
   return false;
     
   }
   else
   {
    setRaja(()=>
    {
   if(data.user_name.length < 3)
   {
    alert("User name is greater than 2"); 
    return false
   }

   if(data.psw.length < 5)
   {
    alert("Password is greater than 4");
    return false
   }

   if(data.mob.length !== 10)
   {
    alert("Mobile no is equal to 10"); 
    return false
   }

  else
  {
    return true
  }
    })  
  }
   }



  return (
    <>
      <div className="container px-lg-5">
        <div className="row px-lg-4">
          <div className="col-md-6 mt-3" style={{ boxShadow: '0 0 2px gray', height: '81vh' }}>
            <h3 className="head_service text-center text-primary">Contact US</h3>

            <form onSubmit={myFun} >
              <label className="form-label">User Name</label>
              <input name="user_name" onChange = {mySun} type="text" className="form-control mb-sm-1" placeholder="User name" />
              <label className="form-label">Email-ID</label>
              <input name="email" onChange = {mySun} type="email" className="form-control  mb-sm-1" placeholder="Enter email" required />
              <label className="form-label">Password</label>
              <input name="psw" onChange = {mySun} type="password" className="form-control  mb-sm-1" placeholder="Enter email" />
              <label className="form-label">Mobile</label>
              <input name="mob" onChange = {mySun} type="number" className="form-control" placeholder="Enter email" />

              <div className="form-check my-2">
                <input name="check" className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Accepts our all terms and conditions
                </label>
              </div>
              <button type="submit" className="btn btn-success mt-3 form-control">Sign up</button>
            </form>

          </div>
          <div className="col-md-6">
          {
          raja === true?(
            <>
           <Modal data = {data}/> 
           </>
            ): (
            <>
            <img className="coffee mt-3" src={coffee} alt="pic" />
            </>
          )
          }
            
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;