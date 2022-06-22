import React from "react";
// import Card from 'react-bootstrap/Card'
import Vote from './Vote'

function PostCard({post}) {

    
    //create a like button using state?
    
    return (
        <div className="card">
            <div className="post">
              <p>{post.content}</p>
              <p className="date">{new Date(post.created_at).toLocaleString()}</p>
            </div>
            {/* <Vote></Vote> */}
        </div>
      );
}

export default PostCard;