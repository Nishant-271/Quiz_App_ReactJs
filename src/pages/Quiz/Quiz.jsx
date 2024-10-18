import { useEffect, useState } from "react";
import Question from "../../components/Questions/Question.jsx";
import "./Quiz.css";
import { CircularProgress } from "@mui/material";
const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]); // jab bhi currQues change hoga toh setoptions vgera re-initialize ho jaye
  // everytime questions change honge function useEffect ka call hoga aur ye print jho jayega

  console.log(options);

  const handleShuffle = (answers) => {
    return answers.sort(() => Math.random() - 0.5); // this is used for shuffling
  };

  return (
    <div className="quiz">
      {/* welcome title */}
      {/* <span className="subtitle">Welcome {name}</span> */}
      {questions ? (
        <>
          <div className="quizinfo">
            <span>{questions[currQues].category}</span>
            <span>Score :{score}</span>
          </div>

          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ marginLeft: "100", textAlign: "center" }}
          color="inherit"
          size={150}
          thickness={2}
        />
      )}
    </div>
  );
};

export default Quiz;
