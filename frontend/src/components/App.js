import React, { useEffect, useState } from 'react';
import Header from "./Header";
import ConsentBox from "./ConsentBox";
import PostList from "./PostList";
import NewPost from "./NewPost"
import './App.css';
import {Route} from "react-router-dom";

function App() {
  const [posts , setPosts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((posts) => setPosts(posts));
  }, []);

  function handleAddPost(newPost){
    setPosts([...posts, newPost]);
  }


  return (
    <div className="App">
      <ConsentBox />
      <Header />
        <Route exact path = "/">
          <PostList posts={posts}/>
        </Route>
      <NewPost onAddPost={handleAddPost}/>
    </div>
  );
}

export default App;
