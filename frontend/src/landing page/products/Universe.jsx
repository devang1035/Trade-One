import React from 'react';
import Button from '@mui/material/Button';

function Universe() {
    return ( 
        <div className='container mt-5'>
        <div className='row text-center mt-5'>
           <h1 className=' mt-5'>The TradeOne Universe</h1>
           <p className=' mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='col-4 p-4 '>
                <img src="media\zerodhaFundhouse.png" style={{width:"40%"}} />
                <p className=' text-muted mt-3' style={{fontSize:"80%"}}>Our asset management venture <br />
                that is creating simple and transparent index <br />
                    funds to help you save for your goals.
                </p>
            </div>
            <div className='col-4  p-4 '>
                <img src="media\sensibullLogo.svg"style={{width:"40%"}}  />
                <p className=' text-muted mt-3' style={{fontSize:"80%"}}>Options trading platform that lets you <br />
create strategies, analyze positions, and examine <br />
data points like open interest, FII/DII, and more.
                </p>
            </div>
            <div className='col-4  p-4  '>
                <img src="media\tijori.svg" style={{width:"30%"}} />
                <p className=' text-muted mt-2' style={{fontSize:"80%"}}>Investment research platform <br />
that offers detailed insights on stocks,<br />
sectors, supply chains, and more.
                </p>
            </div>
            
        </div>

        <div className='row text-center mt-3'>
            <div className='col-4'>
                <img src="media\streakLogo.png" style={{width:"40%"}} />
                <p className=' text-muted mt-3' style={{fontSize:"80%"}}>Systematic trading platform <br />
that allows you to create and backtest <br />
strategies without coding.
                </p>
            </div>
            <div className='col-4  '>
                <img src="media\smallcaseLogo.png"style={{width:"40%"}}  />
                <p className=' text-muted mt-3' style={{fontSize:"80%"}}>Thematic investing platform <br />
that helps you invest in diversified  <br />
baskets of stocks on ETFs.
                </p>
            </div>
            <div className='col-4   '>
                <img src="media\dittoLogo.png" style={{width:"30%"}} />
                <p className=' text-muted mt-2' style={{fontSize:"80%"}}>Personalized advice on life <br />
and health insurance. No spam <br />
and no mis-selling.
                </p>
            </div>
            
        </div>
        <div className='text-center'>
        < Button    variant="contained"  href="https://unique-tanuki-29cc39.netlify.app/" style={{margin:"50px auto"}} > Sign up for free  </ Button >
        </div>
       
       </div>
     );
}

export default Universe;