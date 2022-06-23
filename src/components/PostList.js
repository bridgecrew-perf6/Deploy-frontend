import React, {useState, useEffect} from "react";
import PostCard from "./PostCard";
import NewPost from "./NewPost";

function PostList() {
  const [posts, setPosts] = useState([])
  const [change, setChange]=useState(false)

  useEffect(()=>
  {
    fetch('http://localhost:9292/phases/3/popular')
    .then(response => response.json())
    .then(data => {
      setPosts(data)
      
    });
  }, [change])

  return (
    <div>
      <NewPost change={change}
            setChange={setChange}></NewPost>
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