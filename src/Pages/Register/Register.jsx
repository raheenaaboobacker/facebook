import React from 'react'
import './Register.css'
import {Link} from "react-router-dom"
import Login from '../Login/Login';
function Register() {
  return (
    <div className='row'>
    <div id='logindiv' className='col-sm-5'>
   
  <div id='d1'> <h2 style={{color:'blue'}}>FaceBook</h2>
  <h5>Connect with Friends and world aroud </h5>
  </div>

    </div>
    <div className='col-sm-5'>
        <div className="panel panel-primary">
            <div className="panel-body">
                <form method="POST" action="#" role="form">
                    <div className="form-group">
                        <h2>Create account</h2>
                    </div>
                    <div className="form-group">
                        <label className="control-label" for="signupName">Your name</label>
                        <input id="signupName" type="text" maxlength="50" class="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" for="signupEmail">Email</label>
                        <input id="signupEmail" type="email" maxlength="50" class="form-control"/>
                    </div>
                    <div className="form-group">
                        <label class="control-label" for="signupEmailagain">Email again</label>
                        <input id="signupEmailagain" type="email" maxlength="50" class="form-control"/>
                    </div>
                    <div className="form-group">
                        <label class="control-label" for="signupPassword">Password</label>
                        <input id="signupPassword" type="password" maxlength="25" class="form-control" placeholder="at least 6 characters" length="40"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" for="signupPasswordagain">Password again</label>
                        <input id="signupPasswordagain" type="password" maxlength="25" class="form-control"/>
                    </div>
                    <div className="form-group">
                    <Link to="/home">  <button id="signupSubmit" type="submit" class="btn btn-info btn-block">Sign Up</button></Link>
                    </div>
                    <div className="form-group">
               <Link to="/login"> <button id="signupSubmit" type="submit" class="btn btn-success">Login to Account</button></Link> 
                    </div>
                    
                </form>
            </div>
        </div>
        </div>
</div>
  );
}

export default Register