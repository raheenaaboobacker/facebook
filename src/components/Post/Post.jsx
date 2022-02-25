import React,{useState} from 'react'

// import pic from '../../assets/pic1.jpg'
import './Post.css'
// import postimg from '../../assets/postimg.jpg'
import {ThumbUp,Share,ModeComment}
from '@material-ui/icons'

function Post({pdata}) {
  
  const[like,setLike]=useState(pdata.likes);
  const[isLiked,setIsLiked]=useState(false)
  const Likes=()=>{
     
   setLike(isLiked?like-1:like+1)
   
   setIsLiked(!isLiked)
  
  }
 
  const [coment,setComent]=useState(pdata.comments);
// const likeHandler=()=>{
//   var flag=1;
//   if(flag==0){
//     console.log("flag=0 : "+flag)
//   setNum(eval(num-1))
//   flag=1;
//   }
//   else if(flag==1){
//    setNum(eval(num+1))
// flag=0;
// console.log(flag)
//   }
// }

const commendHandler=()=>{
  setComent((ev)=>setComent(eval(coment+1)))
}

    return( <div><li  style={{listStyleType: "none"}}>
    <div className='row' id='post'>
    <img src={pdata.img} id='img1'/><h5 id='h'>{pdata.uname}</h5><br/>
<h6 id='ph'>{pdata.description}</h6>

<img id='pimg' src={pdata.postimg}/>
<hr style={{width:'70%',border:'1px solid #9BA49E', }}/>
<div className="flex-container">
    <div style={{display:"flex"}}>
      <button id='lbutton' onClick={Likes} ><ThumbUp style={{color:'black'}}  />{like}like</button>
     
       </div>
    <div style={{display:"flex"}}>
    <Share style={{color:'black'}}/>Share 
    </div>
    <div style={{display:"flex"}}>
    <button id='lbutton' onClick={commendHandler} ><ModeComment style={{color:'black'}}/>{coment} Comment</button>
    </div>
</div>
    </div></li>
  </div>);
}

export default Post;

