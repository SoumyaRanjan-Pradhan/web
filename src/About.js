import React from 'react';
import Hero from './Hero';
import raja from './Image/Rashmi.png';

const About = ()=>
{
 return (
 <>
 <Hero imgsrc={raja} 
    main_Heading = "Welcome to About page"
    brand_Name ="Soumya Technical"
    sub_Content = "We are the team of talented developer making websites"
    visit = "/contact"
    button = "Contact Now"  
    />  
 </>    
 )
}

export default About;