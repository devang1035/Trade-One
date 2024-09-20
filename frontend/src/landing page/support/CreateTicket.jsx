import React from 'react';

function CreateTicket() {
    return ( 
       <div className='container'>
            <div className='row mt-5 '>
                <h4 className='mb-2' style={{fontWeight:"400"}}>To create a ticket, select a relevant topic</h4>
                <div className='col-4   p-5'>
                    <h5 className='mb-4' style={{fontWeight:"400"}}><i class="fa-solid fa-circle-plus"></i> Account Opening</h5>
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}} >Getting started </a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Online</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}>Offline</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Charges</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Company, Partnership and HUF</a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Non Resident Indian (NRI)</a> <br />
                                               
                </div>
                <div className='col-4  p-5'>
                    <h5 className='mb-4' style={{fontWeight:"400"}}><i class="fa-regular fa-user"></i>  Your  TradeOne Account</h5>
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}} >Login credentials</a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Your Profile</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}>Account modification and segment addition</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> CMR & DP ID</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Nomination</a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Transfer and conversion of shares</a> <br />
                                               
                </div>
                <div className='col-4   p-5'>
                    <h5 className='mb-4' style={{fontWeight:"400"}}><i class="fa-solid fa-chart-simple"></i>  Trading and Markets</h5>
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}} >Trading FAQs</a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Kite</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}>Margins</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Product and order types</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Corporate actions</a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Kite features</a> <br />
                                               
                </div>
            </div>

            <div className='row  '>
                <div className='col-4  mb-5 p-5'>
                    <h5 className='mb-4' style={{fontWeight:"400"}}><i class="fa-regular fa-credit-card"></i> Funds</h5>
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}} >Fund withdrawal</a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Adding funds</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}>Adding bank accounts</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> eMandates</a><br />
                                               
                </div>
                <div className='col-4  mb-5 p-5'>
                    <h5 className='mb-4' style={{fontWeight:"400"}}><i class="fa-solid fa-crosshairs"></i>   Console</h5>
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}} >IPO</a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Portfolio</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}>Funds statement</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Profile</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Reports</a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Referral program</a> <br />
                                               
                </div>
                <div className='col-4  mb-5 p-5'>
                    <h5 className='mb-4' style={{fontWeight:"400"}}><i class="fa-solid fa-coins"></i>  Coin</h5>
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}} >Understanding mutual funds and Coin</a> <br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Coin app</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}>Coin web</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}> Transactions and reports</a><br />
                    <a href="" style={{lineHeight:"2.5em",fontSize:"95%"}}>National Pension Scheme (NPS)</a> <br />
                                               
                </div>
            </div>
       </div>
     );
}

export default CreateTicket;