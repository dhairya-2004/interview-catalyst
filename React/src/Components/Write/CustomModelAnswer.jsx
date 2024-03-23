import React, { useState } from "react";
import { Avatar } from "antd";
import AnswerEditorText from "../EditorText/AnswerEditorText";
import getUsernameColor from "../Functions/Avtar";

const CustomModalAnswer = ({
  closeModal,
  username,
  setShowAlert1,
  setShowAlertCategory,
  setAnswer
}) => {
  const [title, setTitle] = useState("C++");

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
          <AnswerEditorText placeholder={"Write your answer..."} setAnswer={setAnswer}/>
        </div>
      </div>
    </>
  );
};

export default CustomModalAnswer;
