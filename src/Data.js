import React from "react";
// import { useState, useDate } from "react";
// import { moment, time } from "moment";
import { Card, Avatar} from "antd";
import Profile from "./Profile.png";
import Data from "./Data.json";
import "./Postjson.css";
 
function Postjson() {
// const data =[{"name":"test1"},{"name":"test2"}];
  return (
    <>
      {Data.map((user) => {
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
                  {user.caption.created_time}
                </div>
                <div className="picture">
                  <div className="userStatus">{user.message}</div>
                  Data.items.name
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


