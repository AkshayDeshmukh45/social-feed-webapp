import React from "react";
import { useState } from "react";
import { moment, time} from "moment";
import { Avatar,Layout } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import Profile from "./Profile.png";
import Posts from "./Posts.json";
import './Postjson.css'


function Postjson() {
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;



  return (
    <Layout className="container">
      {Posts.map((user) => {
        return (
          <div className="userPost">
            <div className="prof">
              <div className="profile">
                <Avatar 
                  src={Profile}
                  width={50}
                  height={50}
                />
              </div>
              <div className="userName">{user.from.name}</div>
            </div>
            <div className="sts">
              <div className="created-time">{timezone}</div>
              <div className="picture">
                <div className="userStatus">{user.message}</div>
              </div>
              <div className="userPost">
                <img src={user.url} alt="user2" />
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export default Postjson;
