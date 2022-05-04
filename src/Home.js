import React from "react";
import raja from './Image/web-development.png';
import Hero from "./Hero";


const Home = () => {
    return (
    <>
    <Hero imgsrc={raja} 
    main_Heading = "Grow your business with"
    brand_Name ="Soumya Technical"
    sub_Content = "We are the team of talented developer making websites"
    visit = "/service"  
    button = "Get Started"
    />    
    </>   
    )
}
export default Home;