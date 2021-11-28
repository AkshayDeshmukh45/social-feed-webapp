import React, { useState } from "react";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import "./CommentWidgets";
import { Button, Input, Avatar, Layout } from "antd";

function CommentWidgets(post) {
  //like button using hooks
  const [like, setLike] = useState(25);
  const [isLiked, setIsLiked] = useState(false);

//like handler function
  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  };
  return (
    <div
      style={{
        width: "7vw",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        position: "absolute",
        left: "32vw",
        top: "125vh",
      }}
    >
      <div>
        <HeartOutlined onClick={likeHandler} />
        {like}
      </div>
      <div>
        <CommentOutlined />
        23
      </div>
    </div>
  );
}
export default CommentWidgets;
