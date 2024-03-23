import React, { useState } from "react";
import { Avatar } from "antd";
import QuestionEditorText from "../EditorText/QuestionEditorText";
import getUsernameColor from "../Functions/Avtar";



const CustomModalQuestion = ({
  closeModal,
  username,
  setShowAlert1,
  setShowAlertCategory,
  setQuestion
}) => {
  const [title, setTitle] = useState("C++");


  // if (done === "done") {
  //   const callCloseModal = async (e) => {
  //     try {
  //       console.log("title", title);
  //       if (!title) {
  //         setShowAlertCategory(true);
  //       }
  //       if (title) {
  //         const response = await axios.post(
  //           "http://localhost:5000/user/question",
  //           {
  //             question,
  //             username,
  //             title: "C++",
  //             grant: "false",
  //           }
  //         );

  //         if (response.data.question_main._id !== "" && answers !== "") {
  //           try {
  //             await axios.post("http://localhost:5000/user/commentsubmit", {
  //               cusername: username,
  //               commentData: answers,
  //               question_id: response.data.question_main._id,
  //               edited_comment: "none",
  //               grant: false,
  //             });
  //             setShowAlert1(true);
  //             fetchData();
  //             closeModal();
  //           } catch (error) {
  //             console.log(error);
  //           }
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   callCloseModal();
  // }

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.post(`http://localhost:5000/user/addcategory`, {
  //       title,
  //     });
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const backgroundColor = getUsernameColor(username);

  return (
    <>
      <div className="connect">
        <div className="connect1">
          <Avatar
            style={{
              backgroundColor: backgroundColor,
              color: "#ffffff",
              fontSize: "1.3rem",
            }}
          >
            {username.charAt(0).toUpperCase()}
          </Avatar>
        </div>
        <div className="inputfield">
          <QuestionEditorText
            placeholder={"Write your question.."}
            setQuestion={setQuestion}
          />

          {/* 
            <textarea
              type="text"
              rows="4"
              name="question"
              value={question}
              onChange={handleQuestion}
              placeholder="What's on your mind?"
              className="question-write"
              required
            />
            <textarea
              type="text"
              rows="8"
              name="answer"
              value={answers}
              onChange={handleAnswers}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setAnswers((prevAnswers) => prevAnswers + "\n• ");
                }
              }}
              placeholder="Compose your answer here..."
              className="answer-write"
            /> */}
        </div>
      </div>
    </>
  );
};

export default CustomModalQuestion;
