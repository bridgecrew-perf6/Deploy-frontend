import React from 'react';
import Header from "./Header";
// import ConsentBox from "./ConsentBox";
import PostList from "./PostList";
import NewPost from "./NewPost"
// import {Route} from "react-router-dom";
// import { Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  console.log('hola')

  // function handleAddPost(newPost){
  //   setPosts([...posts, newPost]);
  // }


  return (
    <div className="App">
      {/* <ConsentBox /> */}
      <Header />
      {/* <Routes>
        <Route exact path = "/post">
          <PostList />
        </Route>
        <Route exact path = "/"></Route>
      </Routes> */}
      <PostList />
      <NewPost />
    </div>
  );
}

export default App;
