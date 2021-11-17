import React, { createElement, useState } from "react";
import { Button,Comment,Avatar, Tooltip } from "antd";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import "./CommentWidgets";

function CommentWidgets() {
  return (
    <div style={{
          width: "5%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          left: "33vw",
          top: "55px",
        }}>
     <HeartOutlined/>
     <CommentOutlined />
    </div>
  );
}
export default CommentWidgets;
