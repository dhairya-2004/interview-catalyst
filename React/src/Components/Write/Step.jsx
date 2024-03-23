import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";
import CustomModalQuestion from "./CustomModalQuestion";
import Dropdown from "../Dropdown/Dropdown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CustomModalAnswer from "./CustomModelAnswer";
import { useDispatch, useSelector } from "react-redux";
import { sendQuestion } from "../../Store/DataQuestion/action";
import { useNavigate } from "react-router";

const StepsDesign = ({
  closeModal,
  username,
  setShowAlert1,
  setShowAlertCategory,
  onCancel
}) => {
  const [current, setCurrent] = useState(0);
  const [value, setValue] = useState(false);
  const [addValue, setAddValue] = useState(false);
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [title, setTitle] = useState("C++");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const dataQuestion = useSelector((state) => state.dataQuestion);

  const steps = [
    {
      title: "Question",
      content: (
        <CustomModalQuestion
          closeModal={closeModal}
          username={username}
          setShowAlert1={setShowAlert1}
          setShowAlertCategory={setShowAlertCategory}
          setQuestion={setQuestion}
        />
      ),
    },
    {
      title: "Answer",
      content: (
        <CustomModalAnswer
          closeModal={closeModal}
          username={username}
          setShowAlert1={setShowAlert1}
          setShowAlertCategory={setShowAlertCategory}
          setAnswer={setAnswer}
        />
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const callCloseModal = async (e) => {
    console.log("Question", dataQuestion[0].question);
    console.log("Answers", answer);
    try {
      console.log("title", title);
      if (!title) {
        setShowAlertCategory(true);
      }
      if (title) {
        const response = await axios.post(
          "http://localhost:5000/user/question",
          {
            question: dataQuestion[0].question,
            username,
            title: "C++",
            grant: "false",
          }
        );

        if (response.data.question_main._id !== "" && answer !== "") {
          try {
            await axios.post("http://localhost:5000/user/commentsubmit", {
              cusername: username,
              commentData: answer,
              question_id: response.data.question_main._id,
              edited_comment: "none",
              grant: false,
            });
            setShowAlert1(true);
            // fetchData();
            onCancel();
          } catch (error) {
            console.log(error);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const contentStyle = {
    textAlign: "center",
    marginTop: 16,
    marginBottom: "5rem",
  };

  return (
    <>
      <div className="question-title">
        <h2>{current === 0 ? "Add Your Question" : "Write Answer"}</h2>
      </div>
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="combo">
                <Dropdown
                  setValue={setValue}
                  text={text}
                  addValue={addValue}
                  setTitle={setTitle}
                />
                {value && (
                  <div className="input-button">
                    <input
                      type="text"
                      className="bottom-input"
                      placeholder="Add Subject"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                    <div onClick={() => setAddValue(true)} className="add-item">
                      <AddCircleIcon style={{ fontSize: "2rem" }} />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Button
                  type="primary"
                  onClick={() => {
                    next();
                    dispatch(sendQuestion(question));
                  }}
                >
                  Next
                </Button>
                <Button
                  style={{
                    margin: "0 8px",
                  }}
                  onClick={() => next()}
                >
                  Close
                </Button>
              </div>
            </div>
          </>
        )}
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                // message.success("Processing complete!");
                callCloseModal();
              }}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default StepsDesign;
