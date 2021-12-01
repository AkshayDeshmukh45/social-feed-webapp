import React, { useEffect, useState } from "react";
import {Button, Card, Form, Input, Layout, Avatar } from "antd";
import Profile from "./Profile1.png";
import Prof from "./profile2.png";
import PostCard from "./PostCard";
import {
  HomeOutlined,
  NotificationOutlined,
  MessageOutlined,
} from "@ant-design/icons";

function Postjson() {
  const { TextArea } = Input;
  const [dynamicData, setDynamicData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [togglePost, setTogglePost] = useState(false);
  const [img, setImg] = useState("");

  const [title, setTitle] = useState("");
  // const [comment, setComment] = useState("");
  const [changComnt, SetChangeComnt] = useState("");
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
      id: 1,
      name: "Amella Jones",
      time: "June 22",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },

    {
      id: 2,
      name: "Tony Jones",
      time: "Sept 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 3,
      name: "Jone Dee",
      time: "Oct 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },

    {
      id: 4,
      name: "John Doe",
      time: "Nov 2",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 5,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },

    {
      id: 6,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 7,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 8,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 9,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 10,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 11,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 12,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 13,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
  ];
  const takeImg = async (event) => {
    // const file = event.target.files;
    await handleImage(event.target.files);
  };
  const storageValues = async (event) => {
    setTitle("");
    setOpenModal(false);
    const temp = await {
      Image: img,
      Title: title,
      id: dynamicData ? dynamicData.length : 1,
    };
    var exist = await localStorage.getItem("Values");

    exist = exist ? [...JSON.parse(exist), temp] : [];
    console.log(exist, "exist");
    await localStorage.setItem("Values", JSON.stringify(exist));
    event.preventDefault();
    setTogglePost(!togglePost);
  };
  const handleImage = async (imageAdd) => {
    try {
      console.log(imageAdd, "handle image called");
      // console.log("handleUpload called")
      const data = new FormData();
      data.append("file", imageAdd[0]);
      data.append("upload_preset", "quinkpost");
      data.append("cloud_name", "Quink-Post");
      console.log("before cloud post");

      fetch("https://api.cloudinary.com/v1_1/quink-post/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then(async (data) => {
          console.log(data, "this is data from cloudinary");
          setImg(data?.url);
          // const temp = await {
          //   Image: data?.url,
          //   Title: title,
          //   id: dynamicData ? dynamicData.length : 1,
          // };
          // var exist = await localStorage.getItem("Values");

          // exist = exist ? [...JSON.parse(exist), temp] : [];
          // console.log(exist, "exist");
          // await localStorage.setItem("Values", JSON.stringify(exist));
          // setPreView(data.url);
        })
        .catch((e) => console.log(e, "error from the n catch"));
    } catch (e) {
      console.log(e, "error while sending in cloudinary");
    }
  };
  function changeText(event) {
    SetChangeComnt(event.target.value);
  }

  useEffect(() => {
    const temp = localStorage.getItem("Values");
    setDynamicData(JSON.parse(temp));
    console.log(temp, "this is temp");
  }, [togglePost]);

  function getVal(event, id) {
    // console.log(comment);
    // const temp = { id: id, comment: changComnt };
    // var exist = localStorage.getItem("user");
    // exist = exist ? JSON.parse(exist.split(",")) : [];
    // // exist = (exist)
    // exist.push(temp);
    // localStorage.setItem("user", JSON.stringify(exist));
    // event.preventDefault();
  }
  // console.log(comment);
  return (
    <>
      {" "}
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="primary"
          style={{ background: "red", border: "none", color: "white" }}
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          Add Post
        </button>
      </div> */}
      <div className="row">
        <div
          className=" col-md-12 col-xl-4   d-flex flex-column   align-items-center p-4 border w-md-50 "
          style={{
            margin: "auto",
            borderRadius: "10px",
            backgroundColor: "#dfe1e6",
            marginTop: "0",
          }}
        >
          <div className="d-flex justify-content-start w-100">
            <Avatar
              src={Prof}
              width={50}
              height={50}
              style={{ objectFit: "contain" }}
            />

            <input
              type="text"
              value={title}
              placeholder="What's happening?"
              className="w-100 md:w-80  border p-2"
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginLeft: "10px", borderRadius: "10px" }}
            />
          </div>

          <div className="d-flex w-100 mt-3 justify-content-end">
            <input
              type="file"
              name="img-upload"
              onChange={takeImg}
              // onChange={(e) => handleImage(e.target.files)}
              // value={img}
            />
            <Button
              className="p-1"
              style={{
                // width: "10rem",
                padding: "0px",
                borderRadius: "5px",
                color: "black",
                border: "1px solid grey",
              }}
              onClick={storageValues}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <>
          {/* {user2?.map((user) => { */}
          {dynamicData?.map((user, id) => {
            return <PostCard user={user} userName={user2[id]} />;
          })}
        </>
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
              style={{ width: "80%", borderRadius: "10px" }}
            />
            <input
              type="file"
              name="img-upload"
              onChange={takeImg}
              // onChange={(e) => handleImage(e.target.files)}
              // value={img}
            />
            <button
              style={{
                width: "10rem",
                padding: "0px",
                borderRadius: "15px",
                marginTop: "1rem",
                backgroundColor: "green",
                color: "white",
              }}
              onClick={storageValues}
            >
              Add Post
            </button>
            <button
              style={{
                width: "10rem",
                padding: "0px",
                borderRadius: "5px",
                marginTop: "1rem",
                backgroundColor: "red",
                color: "white",
              }}
              onClick={storageValues}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postjson;
