import React from "react";
import "./Header.css";
import { Button, Input, Avatar, Layout } from "antd";
import Logo from "./logo.png";
import Profile from "./Profile.png";

import {
  HomeOutlined,
  NotificationOutlined,
  MessageOutlined,
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
          <div className="header-logo">
            <img src={Logo} height={30} width={20} />
            Trip Gyan
          </div>
          <Search
            placeholder="Search Tripgyan"
            allowClear
            onSearch={Search}
            style={{ width: "15vw" }}
          />
          <Avatar
            className="rounded"
            src={Profile}
            width={40}
            height={40}
            layout="fixed"
          />
          <Button type="primary" style={{ background: "red" }}>
            Add Post
          </Button>
        </Header>
      </Layout>
    </div>
  );
}

export default Header;
