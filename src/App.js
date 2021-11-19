import React from "react";
import Header from "./Header";
import CommentBox from "./CommentBox";
import CommentWidgets from "./CommentWidgets";
import UploadPost from "./UploadPost.js";
import Postjson from "./Postjson";
function App() {
  return (
    <div>
      <Header />
      <UploadPost />

      <div>
        <Postjson />
        <CommentWidgets />
        <CommentBox />
      </div>

      <div style={{ position: "absolute", top: "100%" }}>
        <CommentWidgets />
        <CommentBox />
      </div>
    </div>
  );
}

export default App;
