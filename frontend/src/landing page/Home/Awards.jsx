import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                <img src="media/largestBroker.svg" alt="Image can't load" />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h2 className='text-muted'>Largest Stock Broker in India</h2><br />
                    <p className='mb-5 text-muted'> That's why 1.5+ crore customers trust TradeOne with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <div className='row mb-3 '>
                        <div className='col-6'>
                            <ul>
                                <li>Future and Options</li>
                                <li>commodity derivatives</li>
                                <li>currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                                <li>Stocks & IPO's.</li>
                                <li>Direct mutual Funds.</li>
                                <li>Bonds & Govt. Securities</li>
                            </ul>
                        </div>
                    </div> 
                    <img src="media\pressLogos.png" alt="Press Logos" style={{width:"98%"}} />              
                </div>
            </div>

        </div>
     );
}

export default Awards;