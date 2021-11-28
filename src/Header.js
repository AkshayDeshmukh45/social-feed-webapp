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
          // localStorage.setItem("sjdgsjd", JSON.stringify(data.url));
          const temp = { Image: data.url, Title: title };
          localStorage.setItem("Values", JSON.stringify(temp));
          // setPreView(data.url);
        })
        .catch((e) => console.log(e, "error from the n catch"));
    } catch (e) {
      console.log(e, "error while sending in local storage");
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
    <div className="header">
      <Layout style={{ background: "white", display: "flex", gap: "15px" }}>
        <Header className="header" style={{ background: "white" }}>
          <div className="header-widgets">
            <HomeOutlined />
            Home
            <NotificationOutlined />
            Notifications
            <MessageOutlined />
            Messages
          </div>
          <div className="header-logo">
            <img src={Logo} height={30} width={20} />
            <h3 className="name">Trip Gyan</h3>
          </div>
          <div className="addpost-section">
            <Search
              placeholder="Search Tripgyan"
              allowClear
              onSearch={Search}
              style={{ width: "20vw", marginRight: "20px" }}
            />
            <Avatar
              className="rounded"
              src={Profile}
              width={40}
              height={40}
              layout="fixed"
              style={{ marginRight: "10px" }}
            />
            <Button
              type="primary"
              style={{ background: "red", border: "none" }}
              onClick={() => {
                setOpenModal(!openModal);
              }}
            >
              Add Post
            </Button>
            <div
              className="modal"
              style={{ display: openModal ? "block" : "none" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  value={title}
                  placeholder="Enter Caption Here"
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ width: "80%", borderRadius: "20px" }}
                />
                <input
                  // className="abcd"

                  type="file"
                  name="img-upload"
                  onChange={takeImg}
                  // onChange={(e) => handleImage(e.target.files)}
                  value={img}
                />
                <button
                  style={{
                    width: "10rem",
                    padding: "0px",
                    borderRadius: "15px",
                    marginTop: "1rem",
                  }}
                  onClick={storageValues}
                >
                  Submit
                </button>
              </div>

              {/* <form action="" onSubmit={storageValues}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className="upload-img" type="file" name="img-upload" 
                onChange={takeImg} 
                // onChange={(e) => handleImage(e.target.files)}
                value={img}/>
                <br />
                <input type="submit" name="Submit" style={{backgroundColor: "yellow"}}/>
              </form> */}
              {/* {
                preView && (
                  <img src={preView} alt="" style={{width: "200px", height: "200px"}} />
                )
              } */}
            </div>
          </div>
        </Header>
      </Layout>
    </div>
  );
}

export default Header;
