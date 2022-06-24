import React, {useState, useEffect} from "react";
import PostCard from "./PostCard";
import NewPost from "./NewPost";


function PostList({id, ranking}) {
  const [posts, setPosts] = useState([])
  const [change, setChange]=useState(false)

  useEffect(()=>
  {
    fetch( `http://localhost:9292/phases/${id.state.id}/popular`)
    .then(response => response.json())
    .then(data => {
      setPosts(data)
      
    });
  }, [change, id, ranking])

  function handleClick(value){
    fetch( `http://localhost:9292/phases/${id.state.id}/${value}`)
    .then(response => response.json())
    .then(data => {
      setPosts(data)
      
    });
  }

  return (
    <div>
      <div class="bottom_nav">
      <ul>
        <button value={'popular'} onClick={(e)=>handleClick(e.target.value)}> Most Popular</button>
        <button value={'oldest'} onClick={(e)=>handleClick(e.target.value)}> Oldest</button>
        <button value={'newest'} onClick={(e)=>handleClick(e.target.value)}> Newest</button>
      </ul>
  </div> 
    <div>
      <NewPost change={change}
            setChange={setChange} id={id.state.id}></NewPost>
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
    </div>
  );
}

export default PostList;
