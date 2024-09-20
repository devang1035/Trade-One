import React from 'react';

function Leftsec({ImageUrl,Title,Description,Trydemo,LearnMore,GooglePlay,AppStore}) {
    return ( 
        <div className='container '>
            <div className='row  '>
                <div className='col-6 p-5'>
                    <img src={ImageUrl}  />
                </div>
                <div className='col-6 p-5 mt-5'>
                        <h1>{Title}</h1>
                        <p>{Description}</p>
                        <div>
                        <a href={Trydemo}>Try demo <i className="fa-solid fa-arrow-right"></i></a>
                        <a href={LearnMore} style={{marginLeft:"50px"}}>Learn More <i className="fa-solid fa-arrow-right" ></i></a>
                        </div>
                        <div className='mt-4'>
                        <a href={GooglePlay}><img src="media\googlePlayBadge.svg" /></a>
                        <a href={AppStore} style={{marginLeft:"50px"}}><img src="media\appstoreBadge.svg" /></a>
                        </div>
                </div>
            </div>
        </div>
     );
}

export default Leftsec;