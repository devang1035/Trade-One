import React from 'react';
import Button from '@mui/material/Button';

function Hero() {
    
    return ( 
        <div className='container'>
            <div className='row text-center p-5 mb-5'>
               <img src="media/homeHero.png" alt="Hero Image " className='mb-5'/>
               <h1 className='mt-5 text-muted'>Invest in everything</h1> 
               <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
               <Button   variant="contained"  style={{width:"20%",margin:"0 auto"}} href="https://unique-tanuki-29cc39.netlify.app/">Open Dashboard</Button >
            </div>
        </div>
     );
}

export default Hero;

