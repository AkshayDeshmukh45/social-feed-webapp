import React from "react";
import "./Header.css";
import { Button, Input,Avatar} from "antd";
// import logo from './logo.png';
// import {Link} from 'react-router-dom';
import {
  HomeOutlined,
  NotificationOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div className="header">
      <div className="home-tab">
        <section>
          <div>
            <HomeOutlined />
            Home
          </div>
          <div className="notification-tab">
            <NotificationOutlined />
            Norifications
          </div>
          <div className="messages-tab">
            <MessageOutlined />
            Messages
          </div>

          <div className="profile">
            {/* <Link to="/">
        <img src="https://www.freepik.com/free-vector/destination-concept-international-travel-journey-red-pointer-with-grey-world-map-inside_10817176.htm#page=1&query=location%20logo&from_query=location%20logo%20png&position=2&from_view=search" alt="App logo">Trip Gyan</img>
      </Link>   */}
          </div>
          <div className="Input-search">
            <Search
              placeholder="Search Tripgyan"
              allowClear
              onSearch={Search}
              style={{ width: 270 }}
            />
          </div>
          <div className="Avatar">
          <Avatar icon={<UserOutlined />} />
          </div>
          <div>
            <Button type="primary" style={{background:"red"}}>Add Post</Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
