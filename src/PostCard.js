import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Profile from "./Profile1.png";

const { Meta } = Card;

function PostCard({ user }) {
  const [changComnt, setchangComnt] = useState("");
  const [showComments, setshowComments] = useState([]);
  const [toggleUpload, setToggleUpload] = useState(false)
  const [toggleComment, setToggleComment] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem("user");

    setshowComments(JSON.parse(temp));
    console.log(temp);
  }, [toggleComment]);

  const getComments = (id) => {
    const comm = showComments?.filter((com) => com?.id == id);
    // console.log(id, showComments, "<<<<<<<<<<<");
    console.log(">>>>>>>", comm);

    return comm;
  };

  function getVal(id) {
    // console.log(comment);

    const temp = { id: id, comment: changComnt };
    var exist = localStorage.getItem("user");
    exist = exist ? JSON.parse(exist.split(",")) : [];

    // exist = (exist)
    exist.push(temp);
    localStorage.setItem("user", JSON.stringify(exist));
    setToggleComment(!toggleComment);
    // event.preventDefault();
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   border: "1px solid grey",
          padding: "1rem",
          borderRadius: "10px ",
          //   flexwrap:"wrap"
        }}
      >
        {" "}
        <div>
          <div>
            <img
              src={Profile}
              style={{ objectFit: "fit", width: "1.75rem" }}
            />
            <span>Peters Berg</span>
          </div>
          <br />
          <Card
            hoverable
            style={{ width: 350, height: 270 }}
            cover={
              <img
                alt="example"
                // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                src={user.Image}
              />
            }
          >
            <Meta title={user?.Title} />
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            // justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <input
            style={{
                marginLeft: "1.25rem",
              borderRadius: "5px",
              border: "0.5px solid sky",
              outline: "none"
            }}
            placeholder="Enter Comment "
            type="text"
            onChange={(va) => setchangComnt(va.target.value)}
          />
          <button
            style={{ border: "1px solid grey", borderRadius: "5px" }}
            onClick={(e) => getVal(user.id)}
          >
            Send
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            {/* <div> {getComments(user.id)}</div> */}
          </div>
        </div>
        <div>
          <span style={{fontWeight: "bold" }}>All Comments </span>
          {(() => {
            return getComments(user?.id)?.map((com) => {
              return (
                <div
                  style={{
                    border: "1px solid grey ",
                    padding: "2px",
                    borderRadius: "3px",
                    marginLeft: "30px",
                  }}
                >
                  {com.comment}
                </div>
              );
            });
          })()}
        </div>
      </div>
    </>
  );
}

export default PostCard;
