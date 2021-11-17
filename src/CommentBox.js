import React, { useState } from "react";
import { Button, Form, TextArea, Input, Avatar, Layout } from "antd";
import Profile from "./Profile.png";
import "./CommentBox.css";

function CommentBox() {
  const { TextArea } = Input;
  const [comment, setComment] = useState("");

  const onChange = (e) => {
    e.target.value = comment;
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
              style={{ marginRight: "20px" }}
            />
    </div>        
      <Form.Item>
        <TextArea rows={1} onChange={onChange} placeholder="Write a comment here"
        style={{maxHeight: "35px"}}/>
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
