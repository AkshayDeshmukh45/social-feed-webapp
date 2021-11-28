import React, { useState } from "react";
import { Form, Input, Avatar, Layout } from "antd";
import Profile from "./profile2.png";
import "./CommentBox.css";

function CommentBox() {
  const { TextArea } = Input;
  const [comment, setComment] = useState("");

  function submitCommit(event) {
    console.log(comment);
    event.preventDefault();
  }

  const onChange = (e) => {
    setComment(e.target.value);
  };
  console.log(comment);
  return (
    <div className="commentbox">
      <Avatar
        className="commentAvatar"
        src={Profile}
        width={10}
        height={10}
        layout="fixed"
        style={{ marginLeft: "20px" }}
      />

      <Form onSubmit={submitCommit}>
        <TextArea
          rows={2}
          onChange={onChange}
          placeholder="Write a comment here"
          style={{
            width: "25vw",
            height: "20px",
            marginLeft: "10px",
            boxShadow: "1px 5px 7px -7px rgba(0, 0, 0, 0.75)",
          }}
        />
      </Form>
    </div>
  );
}

export default CommentBox;
