import React from "react";
import Header from "./Header";
import CommentBox from "./CommentBox";
import Commentbox from "./CommentBox";
import CommentWidgets from "./CommentWidgets";
import UploadPost from "./UploadPost.js";
import Postjson from "./Postjson";
import { Route, Switch } from "react-router-dom";
// import Signup from "./Signup.js";


function App() {
  return (
    <>
      <Header />
      <UploadPost />

      <div>
        <Postjson />
        {/* <CommentWidgets /> */}
        {/* <CommentBox /> */}
      </div>
      {/* <Signup /> */}
    </>
  );
}

export default App;
