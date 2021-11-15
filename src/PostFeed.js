import React from "react";
import { Input, Card, Avatar, Form } from "antd";
import "./PostFeed.css";
import { useState } from "react";
import Post from "./Post";
import { UserOutlined } from "@ant-design/icons";
import Posts from "./Posts.json";

function PostFeed() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Card className="postCard">
        <Avatar icon={<UserOutlined />} />
        <Form>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening"
            className="inputArea"
          />
        </Form>
      </Card>
      {handleSubmit}
      <div>
        <Post
          message="Looking forward to 2022!"
          timestamp="This is timestamp"
        />
      </div>
    </div>
  );
}

export default PostFeed;
