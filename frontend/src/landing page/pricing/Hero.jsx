import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row border-bottom text-center mt-5 p-5'>
                <h1 className='mb-2'>Pricing</h1>
                <p className='mb-5'>Free equity investments and flat ₹20 intraday and F&O trades.</p>
            </div>
            <div className='row border-bottom p-5 mt-5 '>
                <div className='col-4'>
                    <img src="media\pricing0.svg" alt="" style={{width:"70%"}}/>
                    <h3>Free equity delivery</h3>
                    <p className='mt-3 fs-8'>All equity delivery investments (NSE, BSE),<br /> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src="media/intradayTrades.svg" alt=""  style={{width:"70%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p className='mt-3 fs-8'> Flat ₹ 20 or 0.03% (whichever is lower) <br /> per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4' >
                    <img src="media/pricingMF.svg" alt=""  style={{width:"70%"}}/>
                    <h3>Free direct MF</h3>
                    <p className='mt-3 fs-8'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>

        </div>
     );
}

export default Hero;