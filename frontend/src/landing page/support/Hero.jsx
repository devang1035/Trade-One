import React from 'react';

function Hero() {
    return ( 
           <section className='container-fluid' id="supporthero" >
            <div className='  p-4' id="supportwrapper">
                <h4 style={{color:"white"}}>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className=' row mb-5 p-4 mx-5  mt-3' >
                <div className='col-6  p-4 '>
                    <h3 style={{color:"white" , fontWeight:"400"}} className='mb-4'>Search for an answer or browse help topics to create a ticket</h3>
                    <input type="search" placeholder='Eg: How Do I Active F&O ' className='mb-3' /> <br />
                  <a href="" ck style={{color:"white"}}>Track account opening </a> &nbsp;  &nbsp;  
                   <a href=""style={{color:"white"}}>Track segment activation </a>  &nbsp; &nbsp;
                   <a href=""style={{color:"white"}}> Intraday margins </a> &nbsp; &nbsp; <br />
                   <a href=""style={{color:"white"}}>Kite user manual</a>     
                </div>
                <div className='col-6 mb-5 p-3 '>
                    <h3 style={{color:"white" , fontWeight:"400"}} className='mx-5 mb-3'>Featured</h3>
                    <ol className='mx-5'>
                        <a href="" ><li>Offer for sale (OFS) - August 2024</li></a> <br />
                        <a href=""><li>Current Buybacks - August 2024 </li></a>
                    </ol>
                </div>
            </div>
           </section>

     );
}

export default Hero;