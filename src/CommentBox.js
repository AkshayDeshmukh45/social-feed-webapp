import React, { useState } from "react";
import { Button, Form, TextArea, Input, Avatar, Layout } from "antd";
import Profile from "./Profile.png";
import "./CommentBox.css";

function CommentBox() {
  const { TextArea } = Input;
  const [comment, setComment] = useState("");

cont submitCommit =(event)=>{
event.preventDefault();
}

  const onChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="commentbox">
    <div>
    <Avatar
              className="commentAvatar"
              src={Profile}
              width={10}
              height={10}
              layout="fixed"
              style={{ marginLeft: "20px" }}
            />
    </div>        
      <Form.Item onSubmit={submitCommit}>
        <TextArea rows={1} onChange={onChange} placeholder="Write a comment here"
        style={{width: "300px",maxHeight: "25px",marginLeft:"10px",boxShadow: "1px 5px 7px -7px rgba(0, 0, 0, 0.75)" }}/>
      </Form.Item>
      {/* <Form.Item>
        <Button htmlType="submit" type="primary">
          Add Comment
        </Button>
      </Form.Item> */}
    </div>
  );
}

export default CommentBox;
