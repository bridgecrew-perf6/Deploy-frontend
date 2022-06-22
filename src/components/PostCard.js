import React from "react";
// import Card from 'react-bootstrap/Card'
import Vote from './Vote'
import NewComment from "./NewComment";

function PostCard({post, change, setChange}) {

    
    //create a like button using state?
    
    return (
        <div className="card">
            <div className="post">
              <p>{post.content}</p>
              <p className="date">{new Date(post.created_at).toLocaleString()}</p>
              <form></form>
            </div>
            <NewComment post_id={post.id} comments={post.comments} change={change}
            setChange={setChange}></NewComment>

        </div>
      );
}

export default PostCard;