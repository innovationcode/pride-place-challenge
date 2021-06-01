import React from 'react';
import Header from './components/header/Header.js';
import PostList from './components/postList/PostList.js';
import PostsDetail from './components/postsDetail/PostsDetail.js';
import { Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* <Route exact path={["/"]} component={PostList} /> */}
      <Route exact path={["/posts/:id"]} component={PostsDetail }/>
    </div>
  );
}

export default App;
