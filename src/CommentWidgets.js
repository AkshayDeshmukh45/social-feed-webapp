import React, { createElement, useState } from "react";
import { Comment, Avatar, Tooltip } from "antd";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import './CommentWidgets'

 function CommentWidgets() {
  return (
    <div className="reactIcon">
      <HeartOutlined  />
      <CommentOutlined style={{ marginLeft: "1.5rem" }} />
    </div>
  );
}
export default CommentWidgets;