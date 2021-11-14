import React from "react";
import "./Header.css";
import { Button, Input, Avatar, Layout } from "antd";
// import logo from './logo.png';
// import {Link} from 'react-router-dom';
import {
  HomeOutlined,
  NotificationOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Header() {
  const { Header } = Layout;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div className="header">
      <Layout style={{ background: "white" }}>
        <Header className="header" style={{ background: "white" }}>
          <HomeOutlined />
          Home
          <NotificationOutlined />
          Notifications
          <MessageOutlined />
          Messages
          <Search
            placeholder="Search Tripgyan"
            allowClear
            onSearch={Search}
            style={{ width: "15vw" }}
          />
          <Avatar icon={<UserOutlined />} />
          <Button type="primary" style={{ background: "red" }}>
            Add Post
          </Button>
        </Header>
      </Layout>
    </div>
  );
}

export default Header;
