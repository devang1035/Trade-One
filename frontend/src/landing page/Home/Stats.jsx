import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5 '>
            <div className='row mt-5  '>
                <div className='col-6  '>
                    <h2 className='mb-5 mt-3 text-muted' >Trust with Confidence</h2>
                    <h5 className='mt-3'>Customer-first always</h5>
                    <p className='text-muted'>That's why 1.5+ crore customers trust TradeOne with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h5 className='mt-3'>No spam or gimmicks</h5>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h5 className='mt-3'>The TradeOne universe</h5>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h5 className='mt-3'>Do better with money</h5>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                 <div className='col-6 '>
                    <img src="media/ecosystem.png" alt="Image Cant Load" style={{width:"90%",marginLeft:"20%"} } />
                    <div className='text-center'>
                        <a href="" className='mx-5'style={{textDecoration:"none" , color:"blue"}}>Explore Our Products <i className="fa-solid fa-arrow-right"></i> </a> 
                        <a href="" style={{textDecoration:"none" , color:"blue",marginTop:"10%"}}>Try Kite Demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;