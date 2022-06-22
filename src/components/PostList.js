import React, {useState, useEffect} from "react";
import PostCard from "./PostCard";

function PostList() {
  const [posts, setPosts] = useState([])
  const [change, setChange]=useState(false)
  const [newPost, setNewPost]=useState("") 

  useEffect(()=>
  {
    fetch('http://localhost:9292/phases/3/popular')
    .then(response => response.json())
    .then(data => {
      setPosts(data)
      
    });
  }, [change])

  function handleSubmit(e){
    e.preventDefault()
    if (newPost!==""){
        fetch("http://localhost:9292/posts", {
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: newPost,
            like: 0, 
            phase_id: 3,
          }),
        }).then(()=>setChange(!change));
        setNewPost("")
    } 
  }
  

  return (
    <div>
    <form class="card_post" onSubmit={handleSubmit}>
      <input type="text" 
             class="form-control mr-3" 
             placeholder="Make a Post" 
             value={newPost}         
             onChange={(e) => setNewPost(e.target.value)} ></input>       
      <input className="submitButton" type="submit" value="Submit" /></form>
    <div className="list">
      <ul>
        {posts.map(post =>
          <PostCard
            key={post.id}
            post={post}
            change={change}
            setChange={setChange}
          />
        )}
      </ul>
    </div>
    </div>
  );
}

export default PostList;
