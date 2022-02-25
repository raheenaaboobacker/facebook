import React from 'react';
import { Link } from "react-router-dom";
import './header.css'

import {Facebook,
  People,
Message,
Notifications} from '@material-ui/icons';

function Header() {
  return <div>
      <nav>
        <div className='container-fluid'>
          <div className='row'>
            
        <div className="col-sm-1">
      <Facebook id="fb"/> 
        </div>
      {/* <div className="col-sm-2" style={{width:'75%',height:'200px',backgroundColor:'beige'}} >
        Search Facebook
      </div> */}
       {/* <div className={styles.header}>
      </div> */}
      <br></br>
      {/* <div className="col-sm-3"id="searchbar">
 
        <Search id="search"/>
         <input type="search"  placeholder='Search Facebook' id='inp'/>
      
      </div> */}
      <div className="col-sm-3">
      <div className="form-gsearchroup has-search" style={{width:"300px" ,height:"10px"}}>
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text" className="form-control" placeholder="Search"/>
  </div>
  </div>
      <div className="col-sm-2">
      </div>

      <div className="col-sm-1" id="searchheading"><Link to="/Profile"><h3 style={{textdecoration:'none',color:'black'}}>Profile</h3></Link>
      </div>
      <div className="col-sm-1" id="searchheading" ><Link to="/Home"><h3 style={{textdecoration:'none',color:'black'}}>home</h3></Link> 
      </div>
      <div className="col-sm-1" id="navicons"><People/>
      </div>
      <div className="col-sm-1" id="navicons"><Message/></div>
      <div className="col-sm-1" id="navicons"><Notifications/><img></img></div>
      <div className="col-sm-1"><img id="navimg" src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'></img></div>
      </div>
      </div>
      </nav>
  

  </div>;
}

export default Header;
