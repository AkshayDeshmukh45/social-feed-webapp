import React from "react";
import "./PostFeed.css";
import { useState } from "react";
// import { moment, time, Date } from "moment";
import { Avatar, Layout } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import Profile from "./Profile.png";
import Posts from "./Posts.json";

function PostFeed() {
  const [post, setPost] = useState([
    {
      avatar: "./Useprofile.png",
      name: "Kate_Martin",
      time: "June 17",
      status: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
      postImg: "https://pixabay.com/images/id-155554/",
    },
    {
      avatar: "./Useprofile2.png",
      name: "Ellipsy_Martin",
      time: "June 18",
      status: "Looking_towards!!",
      postImg: "https://pixabay.com/images/id-1556177/",
    },
  ]);

  return (
    <Layout className="container">
      {post.map((user) => {
        return (
          <div className="userPost">
            <div className="prof">
              <div className="profile">
                <Avatar
                  className="rounded"
                  src={Profile}
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </div>
              <div className="userName">{user.name}</div>
            </div>
            <div className="sts">
              <div className="created-time">{user.time}</div>
              <div className="picture">
                <p className="userStatus">{user.status}</p>
              </div>
              <div className="userPost">
                <img src={user.postImg} alt="user2" />
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export default PostFeed;
