import React, {useState, useEffect} from "react";
import Vote from './Vote'
import NewComment from "./NewComment";
import Button from 'react-bootstrap/Button';

function PostCard({post, change, setChange}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (new Date()-new Date(post.created_at)<10000){
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 10000);
    }
    else {
        setShow(false);
    }
    
    
  }, []);

  


  function handleClick(id){
    fetch('http://localhost:9292/posts/'+id, {
    method: 'DELETE',
    })
    .then(() =>setChange(!change))
  }
   

    return (
        <div className="card">
            <div className="post">
              <p>{post.content}</p>
              {/* <button className={(show)?  'h2a':'h2b'} variant="primary" >X</button> */}
              {show? <button className='h2a' onClick={() => handleClick(post.id)}>x</button> : ''}
              <p className="date">{new Date(post.created_at).toLocaleString()}</p>
              <form></form>
            </div>
            <NewComment post_id={post.id} comments={post.comments} change={change}
            setChange={setChange}></NewComment>

        </div>
      );
}

export default PostCard;