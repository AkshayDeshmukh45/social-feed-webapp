import React, { useEffect, useState } from "react";
import moment from 'moment'
import { Card, Row } from "antd";
import Profile from "./profile2.png";
import {
  HomeOutlined,
  NotificationOutlined,
  MessageOutlined,
  HeartOutlined,
  DislikeOutlined,
  CommentOutlined,
} from "@ant-design/icons";
const { Meta } = Card;


function PostCard({ user, userName }) {

  //USING POST UPDATED TIME
  let localDate = moment()
  let dateTime = localDate.format('MMM-DD')

  const [LikeDislike, setLikeDislike] = useState(0);
  const [comment, setcomment] = useState("");
  const [showComments, setshowComments] = useState([]);
  
  const [toggleUpload, setToggleUpload] = useState(false);
  const [toggleComment, setToggleComment] = useState(false);


   //getting data from localStorage
  useEffect(() => {
    const getData = localStorage.getItem("user");

    setshowComments(JSON.parse(getData));
    console.log(getData);
  }, [toggleComment]);

  const getComments = (id) => {
    const comm = showComments?.filter((com) => com?.id == id);
    console.log(id, showComments, " ");
    console.log(" ", comm);

    return comm;
  };

  function getVal(id) {
    // console.log(comment);
    const getData = { id: id, comment: comment };
    var exist = localStorage.getItem("user");
    exist = exist ? JSON.parse(exist.split(",")) : [];

    // exist = (exist)
    exist.push(getData);
    localStorage.setItem("user", JSON.stringify(exist));
    setToggleComment(!toggleComment);
    // event.preventDefault();
  }
  return (
    <div className="col-xl-4 col-lg-4 col-md-12 " style={{ margin: "auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   border: "1px solid grey",
          padding: "1rem",
          borderRadius: "10px ",
          margin: "auto",
          //   flexwrap:"wrap"
        }}
        className=" row-xl-6 row-lg-6 row-md-12 border mt-3"
      >
        <div className="row-xl-6  " style={{ alignSelf: "start" }}>
          <img src={Profile} style={{ objectFit: "contain", width: "2rem" }} />
          <span> {userName?.name}</span>
          <div className="ml-6">{dateTime}</div>
          <Meta className="mt-2" title={user?.Title} />
        </div>
        <div>
          <Card
            hoverable
            style={{ marginTop: "1rem" }}
            cover={<img alt="No image" src={user.Image} />}
          ></Card>
        </div>
        <div className="flex w-100 justify-content-start  mt-2">
          <div className="w-25 d-flex mb-2 justify-content-between">
            <HeartOutlined
              onClick={() => setLikeDislike(LikeDislike == 0 ? 1 : 0)}
              style={{ fontSize: "1.25rem" }}
            />
            {LikeDislike}

            <CommentOutlined style={{ fontSize: "1.25rem" }} />
            {getComments(user?.id)?.length}
          </div>
          <div className="row border p-2">
            <div className="col-xl-2">
              <img
                src={Profile}
                style={{ objectFit: "contain", width: "2rem" }}
              />
            </div>
            <div className="col-xl-8">
              <input
                className="w-100"
                placeholder="Enter Comment "
                style={{ borderRadius: "6px", border: "1px solid #4D7EA8" }}
                type="text"
                onChange={(e) => setcomment(e.target.value)}
              />
            </div>
            <div className="col-xl-2">
              <button
                className=""
                style={{ border: "1px solid grey", borderRadius: "5px" }}
                onClick={(e) => getVal(user.id)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start w-100 justify-content-start mt-2 ">
          <span style={{ fontWeight: "bold" }}>All Comments </span>
          {(() => {
            return getComments(user?.id)?.map((com) => {
              return (
                <div className="border d-flex w-100 justify-content-between">
                  <img
                    src={Profile}
                    style={{ objectFit: "contain", width: "1.75rem" }}
                  />
                  <div> {com.comment}</div>
                </div>
              );
            });
          })()}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
