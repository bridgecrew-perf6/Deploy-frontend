import React, {useState, useEffect} from "react";
import PostCard from "./PostCard";

function PostList() {
  const [posts , setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/phases/3/popular")
      .then((r) => r.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="list">
      <ul>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post.post}
          />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
