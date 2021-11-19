import React from "react";
import { Card, Avatar } from "antd";
import Profile from "./Profile.png";
import "./Postjson.css";

function Postjson() {
  const user1 = [
    {
      name: "Jon Doe",
      time: "June 17",
      message: "Looking forward to 2022!",
      profile: "./profile.png",
    },
  ];
  const user2 = [
    {
      name: "Peters Berg",
      time: "June 20",
      message: "Looking forward to 2022!",
      profile: "./profile1.png",
    },
  ];

  return (
    <>
      <>
        {user1.map((user) => {
          return (
            <Card
              style={{
                width: "30%",
                marginLeft: "30vw",
                height: "50vh",
                display: "flex",
                backgroundColor: "#f0f2f5",
                justifyContent: "flex-start",
                position: "absolute",
                top: "90%",
                borderRadius: "10px",
                textAlign: "start",
              }}
            >
              <div className="userPost">
                <div className="prof">
                  <div className="profile">
                    <Avatar src={Profile} width={50} height={50} />
                  </div>
                  <div className="userName">{user.name}</div>
                </div>
                <div className="sts">
                  <div className="created-time">{user.time}</div>
                  <div className="picture">
                    <div className="userStatus">{user.message}</div>
                  </div>
                  <div className="userPost">
                    <img src={user.profile} alt="user1" />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </>
      <>
        {user2.map((user) => {
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
                  <div className="created-time">{user.time}</div>
                  <div className="picture">
                    <div className="userStatus">{user.message}</div>
                  </div>
                  <div className="userPost">
                    <img src={user.profile} alt="user2" />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </>
    </>
  );
}

export default Postjson;
