import React from "react";
import {
  SearchOutlined,
  HomeOutlined,
  NotificationOutlined,
  MessageOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Button } from 'antd';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="main-header">
      <div className="headerIcons">
        <section>
          <div>
            <HomeOutlined />
            Home
          </div>
          <div>
            <NotificationOutlined />
            Notifications
          </div>
          <div>
            <MessageOutlined />
            Messages
          </div>
        </section>
      </div>
      <div className="logo">
        <Link to="/">
          <img src="worldwide-travel-svgrepo-com" alt="app logo" />;
        </Link>
      </div>

      <div className="input-field">
        <input type="text" name="" placeholder="Search Trip gyan">
          <SearchOutlined />
        </input>
        <div className="Avatar">
          <UserOutlined className="user-prof" src="" />
        </div>
        <div className="button-icon">
         <Button
         type="primary"
         data-testid="add-post-button">Add Post</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
