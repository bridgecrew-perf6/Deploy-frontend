import { set } from "immutable";
import React from "react";
import '../index.scss';

function Vote({post_like, post_id, change, setChange}){

  function handleClick(newLikeNumber){
    fetch("http://localhost:9292/posts/"+post_id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      like: newLikeNumber
    }),
  })
    .then(() => setChange(!change))
  }
  

 
    return (

      <div class="vote roundrect">
        <div class="increment up" onClick={()=>handleClick(post_like+1)}></div>
        <div class="increment down" onClick={()=>handleClick(post_like-1)}></div>
        <div class="count" >{post_like}</div>
      </div>


    );
}

export default Vote;