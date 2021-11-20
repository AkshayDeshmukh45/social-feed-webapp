import React from "react";
import { Card, Layout, Avatar } from "antd";
import Profile from "./Profile1.png";
import "./Postjson.css";

function Postjson() {
  
  const user1 = [
    {
      name: "Jon Doe",
      time: "June 17",
      message: "Looking forward to 2022!",
      post: "./profile.png",
    },
  ];
  const user2 = [
    {
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
  ];

  return (
    <>
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          height: "600",
          flexDirection: "column",
        }}
      >
        <>
          {user2.map((user) => {
            return (
              <Layout className="container">
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
                    <Card
                      hoverable
                      style={{ width: "50%" }}
                      cover={
                        <img
                          alt="example"
                          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />
                      }
                    ></Card>
                  </div>
                </div>
              </Layout>
            );
          })}
        </>
        <>
          {user1.map((user) => {
            return (
              <Layout className="container">
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
                    <Card
                      hoverable
                      style={{ width: "100%" }}
                      cover={
                        <img
                          alt="example"
                          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />
                      }
                    ></Card>
                  </div>
                </div>
              </Layout>
            );
          })}
        </>
      </div>
    </>
  );
}

export default Postjson;
