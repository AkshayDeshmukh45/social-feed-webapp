import React, { useState } from "react";
import { Form, Input, Avatar, Layout } from "antd";
import Profile from "./profile2.png";
import "./CommentBox.css";

function CommentBox() {
  const { TextArea } = Input;
  const [comment, setComment] = useState("");

const submitCommit =(event)=>{
event.preventDefault();
}

  const onChange = (e) => {
    setComment(e.target.value);
  };
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
          
      <Form.Item onSubmit={submitCommit}>
        <TextArea rows={2} onKeypress={onChange} placeholder="Write a comment here"
        style={{width: "25vw",height: "20px",marginLeft:"10px",boxShadow: "1px 5px 7px -7px rgba(0, 0, 0, 0.75)" }}/>
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
