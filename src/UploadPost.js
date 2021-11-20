import React from 'react'
import { Input, Card, Avatar, Form } from "antd";
import "./UploadPost.css";
import { useState } from "react";
// import { UserOutlined } from "@ant-design/icons";
import Profile from "./profile2.png";


function UploadPost() {
    const [input, setInput] = useState("");
    return (
    <div className="main-container">
      <Card className="postCard">
        <Avatar
            className="userProf1"
            src={Profile}
            width={50}
            height={50}
            layout="fixed"
          />

        <Form>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening"
            className="inputArea"
            style={{ textAlign: "left" }}
          />
        </Form>
      </Card>
    </div>
  );
}
export default UploadPost
