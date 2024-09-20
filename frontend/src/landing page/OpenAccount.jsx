import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function OpenAccount() {
    return ( 
        <div className='container'>
        <div className='row text-center p-5 mb-5'>

           <h2 className='mt-5 text-muted'>Open a TradeOne Account</h2> 
           <p className='mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
           <Button  variant="contained" style={{width:"20%",margin:"0 auto"}} href="http://localhost:3000/">Signup</Button>
        </div>
    </div>
     );
}

export default OpenAccount;