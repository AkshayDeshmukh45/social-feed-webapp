import React from "react";
import { Input,Card, Avatar,Form } from "antd";
import './PostFeed.css'
import {useState} from 'react'

import { UserOutlined } from "@ant-design/icons";

function PostFeed() {

    const [input,setInput]= useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
    };
  return (
      
    
    <Card className="postCard" >
    
      <Avatar icon={<UserOutlined />} />
      <Form>
      <Input 
      value={input}
      onChange= {(e) =>setInput(e.target.value)}
      placeholder="What's happening"
      className="inputArea"/>
      </Form>
      
    </Card>
    
  );
}

export default PostFeed;
