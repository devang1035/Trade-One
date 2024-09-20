import React from 'react';

function Education() {
    return ( 
        <div className='container p-5 '>
        <div className='row '>
            <div className='col-6 '>
                <img src="media/education.svg" alt="" style={{width:"78%"}}/>
            </div>
            <div className='col-6 '>
            <h4 className='mb-4 text-muted'>Free and open market education</h4>
                <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" style={{textDecoration:"none" , color:"blue"}}>Varsity <i className="fa-solid fa-arrow-right"></i> </a>
                
                <p className='text-muted mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{textDecoration:"none" , color:"blue"}}>TradingQ&A <i className="fa-solid fa-arrow-right"></i> </a>
            </div>
        </div>
    </div>
     );
}

export default Education;