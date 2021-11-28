import React, { useEffect, useState } from "react";
import { Card, Form, Input, Layout, Avatar } from "antd";
import Profile from "./Profile1.png";
import Prof from "./profile2.png";
import "./Postjson.css";
import CommentBox from "./CommentBox";
import CommentWidgets from "./CommentWidgets";
import PostCard from "./PostCard";

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
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },

    {
      id: 2,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },
    {
      id: 3,
      name: "Peters Berg",
      time: "June 20",
      message: "Thats was amazing Trip",
      post: "./profile1.png",
    },

    {
      id: 4,
      name: "Peters Berg",
      time: "June 20",
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
  ];
  const takeImg = async (event) => {
    // const file = event.target.files;
    await handleImage(event.target.files);
  };
  const storageValues = (event) => {
    setTitle("");
    setOpenModal(false);
    event.preventDefault();
    setTogglePost(!togglePost);
  };
  const handleImage = async (imageAdd) => {
    // console.log("this is image add >>>>  >>",imageAdd)

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
          console.log(data, "this is data from cloudinakdfj");
          // setimage(data.secure_url);
          // localStorage.setItem("sjdgsjd", JSON.stringify(data.url));
          const temp = {
            Image: data.url,
            Title: title,
            id: dynamicData ? dynamicData.length : 1,
          };
          var exist = localStorage.getItem("Values");
          exist = exist ? [...JSON.parse(exist), temp] : [];
          localStorage.setItem("Values", JSON.stringify(exist));
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
    console.log(temp, "<<<<<<<<<<<<<<<<<<<this is temp");
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="primary"
          style={{ background: "red", border: "none", color: "white" }}
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          Add Post
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <>
          {/* {user1.map((user) => {
            return (
              <>
                <PostCard />
              </>
            );
          })} */}
        </>
        <>
          {/* {user2?.map((user) => { */}
          {dynamicData?.map((user) => {
            return <PostCard user={user} />;
            // return (
            // <Layout className="container1">
            //   <div className="userPost1">
            //     <div className="prof1">
            //       <div className="profile1">
            //         <Avatar src={Profile} width={50} height={50} />
            //       </div>
            //       <div className="userName1">{user.name}</div>
            //     </div>
            //     <div className="sts1">
            //       <div className="created-time1">{user.time}</div>
            //       <div className="picture1">
            //         <div className="userStatus1">{user.message}</div>
            //       </div>
            //       <Card
            //         hoverable
            //         style={{ width: "100%", height: "50vh" }}
            //         cover={
            //           <img
            //             alt="example"
            //             src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            //           />
            //         }
            //       ></Card>
            //       <div
            //         style={{
            //           position: "absolute",
            //           right: "55vw",
            //           display: "flex",
            //           justifyContent: "space-between",
            //           alignItems: "flex-start",
            //           left: "-32vw",
            //           top: "-25vh",
            //         }}
            //       >
            //         <CommentWidgets />
            //         <div
            //           style={{
            //             marginLeft: "30vw",
            //             display: "flex",
            //             position: "relative",
            //             top: "129vh",
            //           }}
            //         >
            //           <Avatar
            //             className="commentAvatar"
            //             src={Profile}
            //             width={10}
            //             height={10}
            //             layout="fixed"
            //             style={{ marginLeft: "20px" }}
            //           />
            //           <form
            //             action=""
            //             onSubmit={(event) => getVal(event, user.id)}
            //           >
            //             <textarea
            //               name=""
            //               id=""
            //               rows={2}
            //               placeholder="Write a comment here"
            //               style={{
            //                 width: "27vw",
            //                 height: "20px",
            //                 marginLeft: "10px",
            //                 boxShadow: "1px 5px 7px -7px rgba(0, 0, 0, 0.75)",
            //               }}
            //               onChange={(event) => changeText(event)}
            //             ></textarea>
            //             <input type="submit" value="submit" />
            //           </form>
            //           <Form.Item>
            //             <Button htmlType="submit" type="primary">
            //               Add Comment
            //             </Button>
            //           </Form.Item>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </Layout>
            // );
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
                backgroundColor: "green",
                color: "white",
              }}
              onClick={storageValues}
            >
              Submit
            </button>
            <button
              style={{
                width: "10rem",
                padding: "0px",
                borderRadius: "15px",
                marginTop: "1rem",
                backgroundColor: "red",
                color: "white",
              }}
              onClick={storageValues}
            >
              Cancel
            </button>
          </div>

          {/* <form action="" onSubmit={storageValues}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className="abcd" type="file" name="img-upload" 
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
    </>
  );
}

export default Postjson;
