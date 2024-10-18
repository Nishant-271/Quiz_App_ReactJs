import { useState } from "react";
import { useNavigate } from "react-router";

import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Button } from "@mui/material";
const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
}) => {
  const [selected, setSelected] = useState(null); // this is made fro the correct option
  const [error, setError] = useState(false); // if options are not selected and we are going for the new question then it will generate the pop up message

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "selecta"; // select name ki classname return kr dega ye
    } else if (selected === i && selected !== correct) {
      return "wrong"; // select name ki classname return kr dega ye
    } else if (i === correct && selected != null) {
      return "selecta"; // agar maine galat answer choose kr lia toh shi answer apne aap show ho jaye
    }
    return "";
  };

  const handlecheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
    setError(false);
  };

  const navigate = useNavigate();

  const handleNext = () => {
    if (currQues >= questions.length - 1) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected(null); // reset selection for next question
    } else {
      setError("Please select an Option First!");
    }
  };

  const handleQuit = () => {};

  return (
    <div className="question">
      {/* 1. question number */}
      {/* <h1>Q{currQues + 1}.</h1> */}
      {/* box for the div */}
      <div className="singlequestion">
        <h2>
          Q{currQues + 1}. {questions[currQues]?.question}
        </h2>

        {/* error message */}
        <div className="options">
          {error && <ErrorMessage>Please fill all the fields !</ErrorMessage>}
          {/* options */}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handlecheck(i)}
                className={`singleOption  ${selected && handleSelect(i)}  `}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>

        <div className="controls">
          <Button
            size="large"
            href="/"
            style={{ width: 185, backgroundColor: "#124" }}
            variant="contained"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
