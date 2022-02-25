import React from 'react';
import Header from '../../components/Header/Header';
import Leftcompnt from '../../components/Leftcompnt/Leftcompnt';
import Feed from '../../components/Feed/Feed'
import Post from '../../components/Post/Post'
// import mn from '../../assets/pic.jpg'
// import pr from '../../assets/pic.jpg'

import Userfriends from '../../components/Userfriends/Userfriends';
import './Profile.css'
import {data} from'../../DummyArray';

import { postdata } from '../../Postdata';
function Profile() {
  return <div>

<Header/><div className='container-fluid'>
          <div className='row'>
            
        <div className="col-sm-3"> <Leftcompnt/></div>
        <div className="col-sm-9"> 
        <img src={ "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" } height={'300px'} width={'100%'}/>
        <img src={"https://i.pinimg.com/736x/02/51/5c/02515ca755283e12c5bf359991e60d59--facebook-profile-stay-strong.jpg"} id='profile'/>
        <h3 id='name'>Raheena Aboobacker</h3>
        <h6 id='name'>hello my friends</h6>
        <div className='row'>

        <div className="col-sm-4">
        <div><Feed/></div><br/>
        <ul >
     {postdata.map((d)=>(
      <Post key={d.id} pdata={d}/>
     )
     )}
     </ul>
        </div>
        <div className="col-sm-4" id='right'><h4>User information</h4>
        <h5>City : new york</h5>
        <h5>From : Madrid</h5>
        <h5>Rlationship : single</h5><br></br>
        <h4>User friends</h4>
      <div className='row'>
      {data.map((d)=>(
      <Userfriends key={d.id} user={d}/>
     )
     )}
        
       {/* <div> <img id='userpic' src={mn}/><br/>John carter</div>&nbsp;&nbsp;
      <div>  <img id='userpic' src={mn}/><br/>John </div>&nbsp;&nbsp;
      <div>  <img id='userpic' src={mn}/><br/>John </div>&nbsp;&nbsp;
      <div>  <img id='userpic' src={mn}/><br/>John </div>&nbsp;&nbsp;
       <div>  <img id='userpic' src={mn}/><br/>John </div>&nbsp;&nbsp;
       <div>  <img id='userpic' src={mn}/><br/>John </div>&nbsp;&nbsp; */}
        </div>
      </div>
        </div></div>
        </div></div>
    
    
  </div>;
}

export default Profile;
