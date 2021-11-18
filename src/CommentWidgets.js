import React, { useState } from "react";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import "./CommentWidgets";

function CommentWidgets() {
  return (
    <div style={{
          width: "5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          left: "34vw",
          top: "185px",
        }}>
     <HeartOutlined/>
     <CommentOutlined />
    </div>
  );
}
export default CommentWidgets;
