// import React, { useState, useEffect } from "react";
// import "../../Message/CSS/AllQuestion.css";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import CommentIcon from "@mui/icons-material/Comment";
// import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// function AddQuestion({ currentValue }) {
//   const [isLiked, setIsLiked] = useState(false);
//   const [isDown, setIsDown] = useState(false);
//   const [addcomment, setAddComment] = useState(false);
//   const [currentTime, setCurrentTime] = useState(
//     new Date(currentValue.timestamp)
//   );

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const fillLike = (e) => {
//     if (!isLiked) {
//       setIsLiked(true);
//     }
//     if (isLiked) {
//       setIsLiked(false);
//     }
//   };

//   const showComment = (e) => {
//     if (!isDown) {
//       setIsDown(true);
//     }
//     if (isDown) {
//       setIsDown(false);
//     }
//   };

//   const addComment = (e) => {
//     e.preventDefault();
//     if (!addcomment) {
//       setAddComment(true);
//     }
//     if (addcomment) {
//       setAddComment(false);
//     }
//   };

//   return (
//     <>
//       <section style={{margin:'0 4rem'}}>
//         <div className="top-title">
//           <div className="left-side">
//             <div className="avatar" data-label="UN"></div>
//             <div className="name">
//               <div className="name-title-question">{currentValue.username}</div>
//               <div className="time-title">
//                 <QueryBuilderIcon
//                   style={{ fontSize: "0.7rem", marginRight: "5px" }}
//                 />
//                 {currentTime.toLocaleString()}
//               </div>
//             </div>
//           </div>

//           <div className="right-side">
//             <div className="answer-title">
//               <div className="answer-count">35</div> Answer
//             </div>
//             <div className="votes-title">
//               <div className="votes-count">21</div>Votes
//             </div>
//             <div className="favourite-title">
//               <div className="favourite-count">89</div>Favourite
//             </div>
//           </div>
//         </div>

//         <div className="main-addQuestion">
//           <div className="verified">
//             Verified{" "}
//             <VerifiedIcon
//               style={{ fontSize: "0.9rem", color: "rgb(17, 255, 4)" }}
//             />
//           </div>
//           <div className="question">{currentValue.question}</div>
//           <hr className="question-hr" />
//           <div className="answer">
//             {/* &#8594; */}
//             {currentValue.answer}
//           </div>
//           <div className="responses">
//             <div className="icon-left">
//               <div className="likes" onClick={fillLike}>
//                 {/* <img src={like} alt=""  onClick={fillLike} /> */}
//                 {isLiked ? (
//                   <FavoriteIcon style={{ color: "red" }} />
//                 ) : (
//                   <FavoriteBorderIcon />
//                 )}
//               </div>
//               <div className="comments" onClick={addComment}>
//                 <CommentIcon />
//               </div>
//             </div>
//             <div className="icon-right">
//               <div className="up-down" onClick={showComment}>
//                 {isDown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
//               </div>
//             </div>
//           </div>
//         </div>
//         {addcomment ? (
//           <div className="main-comment">
//             <label className="comment-title">Comment</label>
//             <textarea
//               className="input-comment"
//               type="text"
//               placeholder="Add Your Comment.."
//             />
//             <button className="button-comment">Add</button>
//           </div>
//         ) : (
//           <div></div>
//         )}

//         {isDown ? (
//           <div className="main-comment">
//             <label className="comment-title">Comments</label>
//           </div>
//         ) : (
//           <div></div>
//         )}
//       </section>
//     </>
//   );
// }

// export default AddQuestion;

// const avatars = document.querySelectorAll(".avatar");

// avatars.forEach((a) => {
//   const charCodeRed = a.dataset.label.charCodeAt(0);

//   const charCodeGreen = a.dataset.label.charCodeAt(1) || charCodeRed;

//   const red = Math.pow(charCodeRed, 7) % 200;
//   const green = Math.pow(charCodeGreen, 7) % 200;
//   const blue = (red + green) % 200;

//   a.style.background = `rgb(${red}, ${green}, ${blue})`;

//   // console.log(charCodeRed);
//   // console.log(charCodeGreen);
// });
