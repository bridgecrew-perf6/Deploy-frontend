import React from "react";
import PostCard from "./PostCard";

function PostList({posts}) {
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
