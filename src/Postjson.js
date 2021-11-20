import React, { useState } from "react";
import { Card, Form, Input, Layout, Avatar } from "antd";
import Profile from "./Profile1.png";
import Prof from "./profile2.png";
import "./Postjson.css";
import CommentBox from "./CommentBox";
import CommentWidgets from "./CommentWidgets";

function Postjson() {
  const { TextArea } = Input;
  const [comment, setComment] = useState("");
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
      <div>
        <>
          {user1.map((user) => {
            return (
              <Layout className="container">
                <div className="userPost">
                  <div className="prof">
                    <div className="profile">
                      <Avatar src={Prof} width={50} height={50} />
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
        <>
          {user2.map((user) => {
            return (
              <Layout className="container1">
                <div className="userPost1">
                  <div className="prof1">
                    <div className="profile1">
                      <Avatar src={Profile} width={50} height={50} />
                    </div>
                    <div className="userName1">{user.name}</div>
                  </div>
                  <div className="sts1">
                    <div className="created-time1">{user.time}</div>
                    <div className="picture1">
                      <div className="userStatus1">{user.message}</div>
                    </div>
                    <Card
                      hoverable
                      style={{ width: "100%", height: "50vh" }}
                      cover={
                        <img
                          alt="example"
                          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        />
                      }
                    ></Card>
                    <div
                      style={{
                        position: "absolute",
                        right: "55vw",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        left: "-32vw",
                        top: "-25vh",
                      }}
                    >
                      <CommentWidgets />

                      <div
                        style={{
                          marginLeft: "30vw",
                          display: "flex",
                          
                          position: "relative",
                          top: "129vh",
                        }}
                      >
                        <Avatar
                          className="commentAvatar"
                          src={Profile}
                          width={10}
                          height={10}
                          layout="fixed"
                          style={{marginLeft:"20px"}}
                          
                        />

                        <Form.Item>
                          <TextArea
                            rows={2}
                            placeholder="Write a comment here"
                            style={{
                              width: "27vw",
                              height: "20px",
                              marginLeft: "10px",
                              boxShadow: "1px 5px 7px -7px rgba(0, 0, 0, 0.75)",
                            }}
                          />
                        </Form.Item>
                        {/* <Form.Item>
        <Button htmlType="submit" type="primary">
          Add Comment
        </Button>
      </Form.Item> */}
                      </div>
                    </div>
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
