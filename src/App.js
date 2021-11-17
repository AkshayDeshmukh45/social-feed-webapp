import React from 'react';
import Header from './Header'; 
import PostFeed from './PostFeed';
import CommentBox from './CommentBox';
import CommentWidgets from "./CommentWidgets";
import UploadPost from './UploadPost.js'
import Postjson from './Postjson'
function App() {
  return (
    <div>
    
      <Header />
      <UploadPost />
      {/* <PostFeed /> */}
      <Postjson/>
      {/* <CommentWidgets /> */}
      <CommentBox />
    </div>
  )
}

export default App;
