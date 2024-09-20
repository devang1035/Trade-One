import React from 'react';

function Brokrage() {
    return ( 
       <div className='container mt-5'>
        <div className='row mt-5 p-5'>
            <div className='col-7'>
                <h5 className='text-center ' style={{fontWeight:"normal"}}><a href=""  >Brokerage calculator </a></h5>
                <ul style={{fontSize:"70%"}} className='mt-5 ' >
                    <li className='mb-1'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li className='mb-1'>Digital contract notes will be sent via e-mail.</li>
                    <li className='mb-1'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                     <li className='mb-1'>  For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                     <li className='mb-1'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>  
                    <li className='mb-5'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                </ul>
            </div>
            <div className='col-5'>
            <h5 className='text-center ' style={{fontWeight:"normal"}}><a href=""  >List of charges </a></h5>

            </div>
        </div>
       </div>
     );
}

export default Brokrage;