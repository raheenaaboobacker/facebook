import React from 'react';
// import pic from '../../assets/pic1.jpg'
import './feed.css'
import{
    InsertPhoto,
    LocalOffer,
    AddLocation,
    Mood
}from '@material-ui/icons'
function Feed() {
  return( <div>
      <div className='row' id='feed'>
          <img src={"https://i.pinimg.com/736x/02/51/5c/02515ca755283e12c5bf359991e60d59--facebook-profile-stay-strong.jpg"} id='img1'/><h6 id='h'>Whats in your mind?</h6><br/>
            
        <hr style={{width:'70%',border:'1px solid #9BA49E', marginTop:'85px',marginLeft:'-120px'}}/>
        <div className='flex-container'>
  <div style={{display:"flex"}}><InsertPhoto style={{color:'red'}}/>Photo or Video</div>
  <div style={{display:"flex"}}><LocalOffer style={{color:'blue'}}/>Tag</div>
  <div style={{display:"flex"}}><AddLocation style={{color:'green'}}/>Location</div>
  <div style={{display:"flex"}}><Mood style={{color:'ash'}}/>Feeling</div>  
  <div style={{display:"flex"}}><button style={{backgroundColor:'green',borderRadius:'5px'}}> Share</button>
      </div>
</div>
        {/* <div id='d1'><InsertPhoto/>Photo or Video<LocalOffer/>Tag<AddLocation/>Location<Mood/>Feeling</div> */}
      </div>
  </div>)
  ;
}

export default Feed;

