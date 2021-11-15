import React from "react";
import "./Post.css";
import { Avatar, TimePicker } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import "./travel.png";
// import Posts from "./Posts.json";

function Post({ message }) {
  return (
    <div clssName="post">
      <div className="postTop">
        <Avatar icon={<UserOutlined />} className="profile" />
        <TimePicker defaultValue={moment("13:30:56", "HH:mm:ss")} />;
        <div className="postInfo">
          {/* <h4>{username}</h4> */}
          <p>Timestamp...</p>
        </div>
      </div>
      <div className="postBottom">
        <p>{message}</p>
      </div>
      <div className="image">
        <img src="travel.png" alt="image" />
      </div>
    </div>
    // <div>
    //   <Avatar icon={<UserOutlined />} className="profile" />
    //   {Posts.map((post) => {
    //     return (
    //       <div className="postFeed">
    //         {post.avatar}
    //         {post.actions[0].name}
    //         {post.actions[1].name}
    //         {post.actions.url}
    //       </div>
    //     );
    //   })}
    // </div>
  );
}

export default Post;
