import React, { useState } from "react";
import "./Header.css";
import { Button, Input, Avatar, Layout } from "antd";
import Logo from "./logo.png";
import Profile from "./profile2.png";

import {
  HomeOutlined,
  NotificationOutlined,
  MessageOutlined,
} from "@ant-design/icons";

function Header() {
  const { Header } = Layout;
  const { Search } = Input;
  const [openModal, setOpenModal] = useState(false);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  // const[]
  const [preView, setPreView] = useState();
  const onSearch = (value) => console.log(value);

  const handleImage = async (imageAdd) => {
    // console.log("this is image add >>>>>>",imageAdd)

    try {
      console.log(imageAdd, "handle image called");
      // console.log("handleUpload called")
      const data = new FormData();
      data.append("file", imageAdd[0]);
      data.append("upload_preset", "quinkpost");
      data.append("cloud_name", "Quink-Post");
      console.log("before cloud post");

      fetch("https://api.cloudinary.com/v1_1/quink-post/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "this is data from cloudinary");
          // setimage(data.secure_url);
          // localStorage.setItem("img", JSON.stringify(data.url));
          const temp = { Image: data.url, Title: title };
          localStorage.setItem("Values", JSON.stringify(temp));
          // setPreView(data.url);
        })
        .catch((e) => console.log(e, "error from the n catch"));
    } catch (e) {
      console.log(e, "error while sending in cloudinary");
    }
  };

  // const preViewFile = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setPreView(reader.result)
  //   };
  //   console.log(preview);
  // }

  const takeImg = async (event) => {
    // const file = event.target.files;
    await handleImage(event.target.files);
  };

  const storageValues = (event) => {
    setTitle("");
    setOpenModal(false);
    event.preventDefault();
  };

  return (
    <div className="header row">
      <div className="h-10  border p-4  w-100 d-flex justify-content-around flex-wrap">
        {/* Left Side */}
        <div
          className="d-flex justify-content-around   md:w-100  flex-wrap"
          // style={{ marginLeft: "100px" }}
        >
          <div
            className="d-flex"
            style={{ alignSelf: "start", alignContent: "start" }}
          >
            <HomeOutlined style={{ fontSize: "20px",marginLeft: "20px" }} />
            <span className="" style={{ color: "blue", fontSize: "15px" }}>
              {" "}
              Home
            </span>
          </div>
          <div className="d-flex">
            <NotificationOutlined style={{ fontSize: "20px",marginLeft: "20px" }}  />
            <span className="" style={{ color: "blue", fontSize: "15px" }}>
              {" "}
              Notifications
            </span>
          </div>
          <div className="d-flex">
            <MessageOutlined style={{ fontSize: "20px",marginLeft: "20px" }} />
            <span className="" style={{ color: "blue", fontSize: "15px" }}>
              Messages
            </span>
          </div>
        </div>

        <div>
          <img src={Logo} height={30} width={20} />
          <span>Trip Gyan</span>
        </div>
        <div>
          <div className="d-flex">
            {/* <input type="text" /> */}
            <Search
              placeholder="Search Tripgyan"
              allowClear
              onSearch={Search}
              // style={{ width: "20vw", marginRight: "20px" }}
            />
            <Avatar
              className="rounded"
              src={Profile}
              width={40}
              height={40}
              layout="fixed"
              style={{ marginLeft: "20px" }}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
