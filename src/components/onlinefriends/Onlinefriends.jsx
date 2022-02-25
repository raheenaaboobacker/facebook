import "./Onlinefriends.css"
import React from 'react'

function Onlinefriends({user}) {
  return (
    <div>
        <li style={{listStyleType: "none"}}>
        <span><img src={user.img} id='leftimg'/>  <span className="colored-circle" />&nbsp;{user.uname}</span>
        </li><br/>
    </div>
  )
}

export default Onlinefriends