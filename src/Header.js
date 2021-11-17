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
          <div className="header-widgets">
            <HomeOutlined />
            Home
            <NotificationOutlined />
            Notifications
            <MessageOutlined />
            Messages
          </div>
          <div className="header-logo">
            <img src={Logo} height={30} width={20} />
            <h3 className="name">Trip Gyan</h3>
          </div>
          <div className="addpost-section">
            <Search
              placeholder="Search Tripgyan"
              allowClear
              onSearch={Search}
              style={{ width: "20vw", marginRight: "20px" }}
            />
            <Avatar
              className="rounded"
              src={Profile}
              width={40}
              height={40}
              layout="fixed"
              style={{ marginRight: "10px" }}
            />
            <Button type="primary" style={{ background: "red" }}>
              Add Post
            </Button>
          </div>
        </Header>
      </Layout>
    </div>
  );
}

export default Header;
