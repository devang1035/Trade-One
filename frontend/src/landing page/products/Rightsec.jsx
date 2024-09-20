import React from 'react';

function Rightsec({Title,Description,ImageUrl,Link}) {
    return ( 
       <div className='container mt-5'>
        <div className='row '>
            <div className='col-6 p-5 mt-5'>
                <h2 className='mt-5'>{Title}</h2>
                <p className='mt-3'>{Description}</p>
                <a href="">{Link} <i className="fa-solid fa-arrow-right" ></i></a>
            </div>
            <div className='col-6 '>
                <img src={ImageUrl}  />
            </div>
        </div>
       </div>
     );
}

export default Rightsec;