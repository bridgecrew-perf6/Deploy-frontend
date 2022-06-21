import React from "react";
// import Card from 'react-bootstrap/Card'
import Vote from './Vote'

function PostCard({post}) {
    const {content} = post
    
    //create a like button using state?
    
    return (
        <div>
            <li className="post">
              <p>{content}</p>
              <Vote></Vote>
            </li>
        </div>
      );
}

export default PostCard;