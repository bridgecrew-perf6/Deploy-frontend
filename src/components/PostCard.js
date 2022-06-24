import React, {useState, useEffect} from "react";
import Vote from './Vote'
import NewComment from "./NewComment";
import Button from 'react-bootstrap/Button';

function PostCard({post, change, setChange}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(!show);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  


  // function handleDelete(id){
  //   fetch('http://localhost:9292/posts/' + id, {
  //   method: 'DELETE',
  //   })
  //   .then(res => res.json()) 
  //   .then(() => setDeleted(!deleted))
  // }




    
    //create a like button using state?
    
    
    return (
        <div className="card">
            <div className="post">
              <p>{post.content}</p>
              <button className={console.log(Date())? 'h2b' : 'h2a'} variant="primary" >X</button>
              <p className="date">{new Date(post.created_at).toLocaleString()}</p>
              <Vote post_like={post.like}></Vote>

              <form></form>
            </div>
            <NewComment post_id={post.id} comments={post.comments} change={change}
            setChange={setChange}></NewComment>

        </div>
      );
}

export default PostCard;