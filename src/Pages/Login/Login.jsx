import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className='row'>
    <div id='logindiv' className='col-sm-5'>
   
  <div id='d4'> <h1 style={{color:'blue'}}>FaceBook</h1>
  <h5>Connect with Friends and world aroud You. </h5>
  </div>
  </div>
    <div className='col-sm-7' id='d3'>
    <div className="wrapper fadeInDown">
<div id="formContent">

<form>
  <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" required/>
  <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" required/>
  <Link to="/home"> <input type="submit" className="fadeIn fourth" value="Log In"/></Link>

<div id="formFooter">
  <a class="underlineHover" href="#">Forgot Password?</a><br/>
  <Link to="/register"><button id="signupSubmit" type="submit" class="btn btn-success">Create a new account</button></Link>

</div>
</form>
</div>
</div>
        </div>
</div>
  )
}

export default Login