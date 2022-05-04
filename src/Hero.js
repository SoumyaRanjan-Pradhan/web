import React from "react";
import {Link} from 'react-router-dom';
import './index.css';

const Hero = (props)=>
{
return (
    <>
    <div className="container">
        <div className="row cover">
            <div className="col-md-6 px-md-1 py-md-4 px-lg-5 py-lg-5 title">
                <div className='px-3 py-5'>
                    <h1 className="Heading mb-4"><span className="main_heading">{props.main_Heading}</span> <span className="brand_name">{props.brand_Name}</span></h1>
                    <p className="sub_content">{props.sub_Content}</p>
                    <Link className="btn btn-outline-primary mt-lg-2 mt-md-3" to={props.visit}>{props.button}</Link>
                </div>
            </div>
            <div className="col-md-6 px-md-1 px-lg-5 picture">
                <div className="mx-2 mt-4">
                    <img className="pic" src={props.imgsrc} alt="pic" />
                </div>
            </div>
        </div>
    </div>
</>    
)
}
export default Hero;