import React, { useEffect, useState } from 'react';
import Header from "./NavBar";
import ConsentBox from "./ConsentBox";
import PostList from "./PostList";
import {Route, Switch} from "react-router-dom";
import { useLocation} from "react-router-dom"
import NotFoundPage from "./NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let location = useLocation();

  console.log(location)
  

  return (
    <div className="App">
      <Switch>
        <Route exact path="/Phase1">
          <Header></Header>
          <PostList id={location}/>
        </Route>
        <Route exact path="/Phase2">
          <Header></Header>
          <PostList id={location}/>
        </Route>
        <Route exact path="/Phase3">
          <Header></Header>
          <PostList id={location}/>
        </Route>
        <Route exact path="/Phase4">
          <Header></Header>
          <PostList id={location}/>
        </Route>

        <Route exact path="/Phase5">
          <Header></Header>
          <PostList id={location}/>
        </Route>
        
        <Route exact path="/">
          <ConsentBox />
        </Route>
        <Route path="*" component={NotFoundPage} />


      </Switch>
    </div>
  );
}

export default App;
