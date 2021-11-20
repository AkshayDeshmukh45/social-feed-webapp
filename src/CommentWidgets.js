import React, { useState } from "react";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import "./CommentWidgets";

function CommentWidgets() {
  return (
    <div style={{
          width: "7vw",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          position: "absolute",
          left: "32vw",
          top: "125vh",
        }}>
    <div>    
     <HeartOutlined/>
     25
     </div>
     <div>
     <CommentOutlined />
     23
     </div>
    </div>
  );
}
export default CommentWidgets;
