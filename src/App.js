import React from 'react';
import Header from './Header'; 
import PostFeed from './PostFeed';
import CommentWidgets from "./CommentWidgets";
import UploadPost from './UploadPost.js'

function App() {
  return (
    <div>
    
      <Header />
      <UploadPost />
      <PostFeed />
      <CommentWidgets />
      {/* <CommentBox /> */}
    </div>
  )
}

export default App;
