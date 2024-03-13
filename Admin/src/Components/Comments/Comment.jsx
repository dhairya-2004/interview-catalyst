import axios from "axios";
import { React, useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Default from "./one";
import Answerdata from "./Answerdata";
import "../Admin/CSS/Admin_cheack_Ans.css";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

const Comment = ({
  questionId,
  currentValue,
  img,
  questionData,
  setRefereshData,
  setShowAlert,
  setGrant
}) => {
  const [commentData, setCommentData] = useState("");
  const [nextCommentData, setNextCommentData] = useState([]);
  const [addcommentData, setAddCommentData] = useState(false);
  const [cusername, setCUsername] = useState(false);
  const [getCommentusername, setGetCommentUsername] = useState([]);
  const [firstComment1, setFirstComment] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/user/getcomment?question_id=${questionId}`
      );
      const sortData = res.data.question_comment;

      const sortedComments = sortData.sort((a, b) => b.likeCount - a.likeCount);
      // console.log(sortedComments);
      setFirstComment(sortedComments.length > 0 ? sortedComments[0] : null);

      const usernames = res.data.question_comment.map(
        (comment) => comment.username
      );
      // setProfileImage(usernames);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const change = async () => {
    try {
      const res = await axios.post("http://localhost:5000/user/commentsubmit", {
        cusername: cusername,
        question_id: currentValue._id,
        commentData,
        edited_comment: "none",
      });
      console.log(res.data);
      setNextCommentData(res.data.question_comment);
      setCommentData("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/adminlogin", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCUsername(res.data.cusername);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const cheackGrant = async (value, id) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/user/updategrantmain`,
        {
          commentid:firstComment1._id,
          _id: id,
          grant: value,
        }
      );
      console.log(res.data);
      setGrant(res.data.grant);
      setRefereshData(true);
      // console.log("123456")
    } catch (error) {
      console.log(error);
    }
  };

  // const setProfileImage = async (usernames) => {
  //   try {
  //     const profiles = [];
  //     for (const username of usernames) {
  //       const res = await axios.get(
  //         `http://localhost:5000/user/getprofile?cusername=${username}`
  //       );
  //       const newData = res.data.profile;
  //       profiles.push(newData);
  //     }
  //     // console.log(profiles);
  //     setGetCommentUsername(profiles);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const calculateTimeDifference = (timestamp) => {
    const timeDifference = new Date() - new Date(timestamp);
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

    if (years > 0) return `${years} years ago`;
    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} min ago`;
    return "Just now";
  };

  const avatarGroupStyle = {
    display: "flex",
    marginRight: "6rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  };
  return (
    <>
      <div className="comment-3">
        <div className="comment-comment-2">
          <div className="comment-comment-top">
            <div className="manage-space">
              <div className="contro-distance">
                <div className="contro-distance2">
                  <div className="comment-userimage">
                    <div className="avatar">
                      {getCommentusername[0] &&
                      getCommentusername[0].image !== null ? (
                        <img src={getCommentusername[0].image} alt="profile" />
                      ) : (
                        <AccountCircleIcon style={{ fontSize: "3rem" }} />
                      )}
                    </div>
                  </div>
                  <div className="comment-time">
                    <div className="comment-username">
                      {firstComment1.username}
                    </div>

                    <div className="time-title">
                      <QueryBuilderIcon
                        style={{ fontSize: "0.7rem", marginRight: "5px" }}
                      />
                      <div className="comment-username-time">
                        {calculateTimeDifference(firstComment1.timestamp)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contro-name">
                  <FluentProvider
                    theme={webLightTheme}
                    style={avatarGroupStyle}
                  >
                    <Default cid={firstComment1._id} />
                  </FluentProvider>
                </div>
              </div>

              <div className="question-que" style={{ marginLeft: "1rem" }}>
                <p> Answer :</p>
              </div>

              <Answerdata comment={firstComment1} />
            </div>
            <hr />
            <div className="cheack-ans">
              <div className="cheack-ans-button">
                <button
                  className="cheack-ans-button-press cancelbtn"
                  onClick={() =>
                    cheackGrant("false", firstComment1.question_id)
                  }
                >
                  Cancel
                </button>
              </div>
              <div className="cheack-ans-button ">
                <button
                  className="cheack-ans-button-press"
                  onClick={() => cheackGrant("true", firstComment1.question_id)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;
