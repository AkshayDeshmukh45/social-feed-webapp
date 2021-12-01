import React from "react";
import Header from "./Header";
import UploadPost from "./UploadPost.js";
import Postjson from "./Postjson";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login.js";

function App() {
  return (
    <>
      <Header />
      <div style={{backgroundColor: "#dbdbdb" }}>
        <Postjson />
      </div>
      {/* <Router>
      <Switch> */}
      {/* <Route path="/" exact component={Login} /> */}
      {/* <Route path= "/LoginLayout" exact component= {LoginLayout} /> */}
      {/* <Route path="/Header" exact component={Header} />
      <Route path="/UploadPost" exact component={UploadPost} />
      <Route path="/Postjson" exact component={Postjson} /> */}
      {/* <Route path= "/Login" exact component= {Login} /> */}
      {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
