import React from 'react';
import './Leftcompnt.css';
// import pic from '../../assets/pic1.jpg'
import {RssFeed,
Chat,
VideoLibrary,
Group,
Bookmark,
WorkOutline,
QuestionAnswer,
Event,
School,
} from '@material-ui/icons'
import { data } from '../../DummyArray';
import Onlinefriends from '../onlinefriends/Onlinefriends';
function Leftcompnt() {
  return <div id='left'>
      
      <div className='row' id='leftdiv'><RssFeed/><nbps/>Feed</div>
      <div className='row'id='leftdiv'><Chat/>Chat</div>
      <div className='row'id='leftdiv'><VideoLibrary/>Videos</div>
      <div className='row'id='leftdiv'><Group/>Groups</div>
      <div className='row'id='leftdiv'><Bookmark/>Bookmarks</div>
      <div className='row'id='leftdiv'><QuestionAnswer/>Questions</div>
      <div className='row'id='leftdiv'><WorkOutline/>Jobs</div>
      <div className='row'id='leftdiv'><Event/>Events</div>
      <div className='row'id='leftdiv'><School/>Courses</div>
      <div><button> Show More</button>
      </div>
     <hr style={{width:'90%',border:'1px solid #9BA49E'}}></hr>
     <ul style={{textDecoration:"none"}}>
     {data.map((d)=>(
      <Onlinefriends key={d.id} user={d}/>
     )
     )}
     </ul>
    
  </div>
}

export default Leftcompnt;
