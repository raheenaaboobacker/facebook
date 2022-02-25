import React from 'react';
import Feed from '../../components/Feed/Feed';
import Header from '../../components/Header/Header';
import Leftcompnt from '../../components/Leftcompnt/Leftcompnt';
import Post from '../../components/Post/Post';
// import burgerimg from '../../assets/burgerimg.jpg'
import './Home.css'
// import dp1 from '../../assets/dp1.jpg'
// import dp2 from '../../assets/dp2.jpg'
// import dp3 from '../../assets/dp3.jpg'
import { postdata } from '../../Postdata';
import {data} from'../../DummyArray';
import Onlinefriends from '../../components/onlinefriends/Onlinefriends';
function Home() {
  return (
    <div><Header/>
    <div className='container-fluid'>
          <div className='row'>
              <div className='col-sm-3'><Leftcompnt/></div>
              <div className='col-sm-6'><br/><Feed/><br/>
              <ul >
     {postdata.map((d)=>(
      <Post key={d.id} pdata={d}/>
     )
     )}
     </ul>
              </div>
              <div className='col-sm-2'><img id='burgerimg' src={"https://cdn.businesstraveller.com/wp-content/uploads/fly-images/951047/zomato-infinity-dining-916x516.jpg"}/><br/><br/>
              <h4>Online friends</h4>
<ul>
  {data.map((d)=>(
    <Onlinefriends key={d.id} user={d}/>
  ))}
</ul>
              {/* <span><img src={dp1} id='dp'/>&nbsp;Jihana Gafoor</span><br></br>  
              <span><img src={dp2} id='dp'/>&nbsp;Rafeeda Faisal</span><br/>
              <span><img src={dp3} id='dp'/>&nbsp;Krishna Priya</span><br></br>  */}
                          </div>
              </div></div></div>
  );
}

export default Home