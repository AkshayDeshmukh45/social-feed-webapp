import React from 'react';
import Header from './Header'; 
// import PostFeed from './PostFeed';
import CommentBox from './CommentBox';
import CommentWidgets from "./CommentWidgets";
import UploadPost from './UploadPost.js'
import Postjson from './Postjson';
import Data from './Data.js'
function App() {
  return (
    <div>
    
      <Header />
      <UploadPost />
      {/* <PostFeed /> */}
    <div>
      <Postjson/>
      <CommentWidgets />
      <CommentBox />
     </div> 
    <div style={{position:"absolute", top:"85%"}}>
      <Data />
      <CommentWidgets />
      <CommentBox />
     </div> 
    </div>
  )
}

export default App;
