import React from 'react'
import "./Userfriends.css"

function Userfriends({user}) {
  return (
    <div> <img id='userpic' src={user.img}/><br/>{user.uname}&nbsp;&nbsp;</div>
  );
}

export default Userfriends