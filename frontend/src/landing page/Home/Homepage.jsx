import React from 'react';
import Hero from './Hero';
import Award from './Awards';
import Education from './Education';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';


function Homepage() {

   return ( 
        <>
        <Hero />
        <Award />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
    
        
        </>
     );
}

export default Homepage;