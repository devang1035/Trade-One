import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Navbar() {
 
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"#fff"}}>
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img src="media/logo2.jpg" alt="logo" style={{width:"25%"}}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" >
            <ul className="navbar-nav  mb-lg-0">
           
              <li className="nav-item">
                <Link className="nav-link active" style={{fontSize:"90%"}}  to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{fontSize:"90%"}}  to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{fontSize:"90%"}}  to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{fontSize:"90%"}}  to="/support">
                  Support
                </Link>
              
              </li> 
              <li className="nav-item">
              <Stack direction="row" spacing={2}>
                <Button  variant="contained" style={{fontSize:"90%",marginLeft:"60px"}}  aria-current="page" href="http://localhost:3000/signup" >
                 Sign up
                </Button>
               </Stack >
              </li>
            </ul>
            </form>
        
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
