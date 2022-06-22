import React, { useEffect, useState } from 'react';
import Header from "./NavBar";
import ConsentBox from "./ConsentBox";
import PostList from "./PostList";
import NewPost from "./NewPost"
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Switch>
        {/* <Header /> */}
          {/* <Route exact path = "/">
          <PostList posts={posts}/>
          </Route>
        <NewPost onAddPost={handleAddPost}/> */}
        
        <Route exact path="/Home">
          <PostList/>
        </Route>
        
        <Route exact path="/">
          <ConsentBox />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
