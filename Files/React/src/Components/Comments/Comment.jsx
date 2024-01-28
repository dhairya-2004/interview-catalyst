import axios from "axios";
import { React, useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Comment = ({ currentValue }) => {
  const [commentData, setCommentData] = useState("");
  const [nextCommentData, setNextCommentData] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [addcomment, setAddComment] = useState(false);
  const [cusername, setCUsername] = useState(false);
  const [getCommentusername, setGetCommentUsername] = useState([]);

  const fillLike = (e) => {
    if (!isLiked) {
      setIsLiked(true);
      change();
    }
    if (isLiked) {
      setIsLiked(false);
      change();
    }
  };

  const showData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/user/getcomment?question_id=${currentValue._id}`
      );
      console.log(res.data);
      setNextCommentData(res.data.question_comment);

      const usernames = res.data.question_comment.map(
        (comment) => comment.username
      );
      // setCommentUsername(usernames[0]);
      setProfileImage(usernames);
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = (e) => {
    e.preventDefault();
    if (!addcomment) {
      showData();
      setProfileImage();
      setAddComment(true);
    }
    if (addcomment) {
      setAddComment(false);
    }
  };

  const handleCommentData = (e) => {
    e.preventDefault();
    setCommentData(e.target.value);
    resizeTextarea();
  };

  const change = async () => {
    try {
      const res = await axios.post("http://localhost:8080/user/commentsubmit", {
        cusername: cusername,
        question_id: currentValue._id,
        commentData,
        like: isLiked,
      });
      setNextCommentData(res.data.question_comment);
      setCommentData("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitComment = async (e) => {
    change();
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching login...");

      try {
        const res = await axios.get("http://localhost:8080/user/login", {
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
  }, [nextCommentData]);

  function resizeTextarea() {
    const textarea = document.getElementById("input-comment");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }
  const setProfileImage = async (usernames) => {
    try {
      const profiles = [];
      for (const username of usernames) {
        const res = await axios.get(
          `http://localhost:8080/user/getprofile?cusername=${username}`
        );
        const newData = res.data.profile;
        profiles.push(newData);
      }
      setGetCommentUsername(profiles);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   setProfileImage();
  // }, []);

  return (
    <>
      <div className="responses">
        <div className="icon-left">
          <div className="likes" onClick={fillLike}>
            {isLiked ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </div>
          <div className="comments" onClick={addComment}>
            <CommentIcon />
          </div>
        </div>
      </div>
      <hr style={{ height: "1px" }} />

      {addcomment ? (
        <div className="main-comment">
          <label className="comment-title">Comments</label>
          <div className="main-comment-in">
            <div className="comments-send">
              <textarea
                className="input-comment"
                id="input-comment"
                type="text"
                value={commentData}
                onChange={handleCommentData}
                placeholder="Comment here.."
                wrap="soft"
              />
              <div className="button-comment-div">
                <button
                  className="button-comment"
                  onClick={handleSubmitComment}
                >
                  <SendIcon />
                </button>
              </div>
            </div>
            <hr />
            <div className="comment-botttom-list">
              {nextCommentData.map((comment, index) => (
                <div key={index}>
                  <div className="comment-3">
                    <div className="comment-userimage">
                      <div className="avatar">
                        {getCommentusername[index] &&
                        getCommentusername[index].image !== null ? (
                          <img
                            src={getCommentusername[index].image}
                            alt="profile"
                          />
                        ) : (
                          <AccountCircleIcon style={{ fontSize: "3rem" }} />
                        )}
                      </div>
                    </div>
                    <div className="comment-comment-2">
                      <div className="comment-time">
                        <div className="comment-username">
                          {comment.username}
                        </div>
                        <div className="comment-username-time">2 min ago</div>
                      </div>
                      <div className="comment-subcomment">
                        {comment.comment}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Comment;
