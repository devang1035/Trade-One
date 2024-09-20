import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5 '>

            <div className='row '>
                <div className='col-5 '>
                    <h3 className='mb-3 fs-3 text-muted'>Unbeatable pricing</h3>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none" , color:"blue"}}>See Pricing <i className="fa-solid fa-arrow-right"></i> </a>
                </div>

                <div className='col-7 '>
                    <div className='row'>
                        <div className='col-2 p-1'>
                            <img src="media/pricing0.svg" alt="Image Can't Load"  />
                            </div>
                            <div className='col-2 mt-4'>
                            <p style={{fontSize:"80%"}}>Free account
                            opening</p>
                            </div>
                            <div className='col-2 p-1'>
                            <img src="media/pricing0.svg" alt="Image Can't Load"  />
                            </div>
                            <div className='col-2 mt-4'>
                            <p style={{fontSize:"70%"}}>Free equity delivery
                            and direct mutual funds</p>
                            </div>
                            <div className='col-2 p-1'>
                            <img src="media/intradayTrades.svg" alt="Image Can't Load"  />
                            </div>
                            <div className='col-2 mt-4'>
                            <p style={{fontSize:"70%"}}>Intraday and
                            F&O</p>
                            </div>
    
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;