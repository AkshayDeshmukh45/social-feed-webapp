import React from "react";
import Header from "./Header";
import CommentBox from "./CommentBox";
import CommentWidgets from "./CommentWidgets";
import UploadPost from "./UploadPost.js";
import Postjson from "./Postjson";

function App() {
  return (
    <>
      <Header />
      <UploadPost />

      <div>
        <Postjson />
        <CommentWidgets />
        <CommentBox />
      </div>
    </>
  );
}

export default App;
