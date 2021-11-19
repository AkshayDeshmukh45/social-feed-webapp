import React from "react";
// import { useState, useDate } from "react";
// import { moment, time } from "moment";
import { Card, Avatar } from "antd";
import Profile from "./Profile.png";
import Posts from "./Posts.json";
import "./Postjson.css";

function Postjson() {
  console.log(JSON.stringify(Posts));
  return (
    <>
      {Posts.map((user) => {
        return (
          <Card className="container">
            <div className="userPost">
              <div className="prof">
                <div className="profile">
                  <Avatar src={Profile} width={50} height={50} />
                </div>
                <div className="userName">{user.name}</div>
              </div>
              <div className="sts">
                <div className="created-time">
                  {user.caption[0].created_time}
                </div>
                <div className="picture">
                  <div className="userStatus">{user.message}</div>
                </div>
                <div className="userPost">
                  <img src={user.url} alt="user2" />
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default Postjson;
