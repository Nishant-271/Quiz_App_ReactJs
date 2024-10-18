import { useState } from "react";
import Categories from "../../Data/Categories";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Home.css";
import { useNavigate } from "react-router";
import { Button, MenuItem, TextField } from "@mui/material";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // if anything is empty then we will throw an error
  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        {/* first step : heading */}
        <span
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            margin: "20px",
            color: "#124",
          }}
        >
          QUIZ INSTRUCTIONS :
        </span>
        {/* third step:settings select */}
        <div className="select">
          {error && <ErrorMessage>Please fill all the fields !</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            style={{ marginBottom: 25 }}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <TextField
            select
            label="Select Category"
            style={{ marginBottom: 30 }}
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => {
              return (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              );
            })}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            style={{ marginBottom: 20 }}
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="easy" value="easy">
              easy
            </MenuItem>
            <MenuItem key="medium" value="medium">
              medium
            </MenuItem>
            <MenuItem key="hard" value="hard">
              hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            style={{ marginBottom: "25px", backgroundColor: "#124" }}
            onClick={handleSubmit}
          >
            START QUIZ
          </Button>
        </div>
      </div>
      {/* Image inport */}
      <img
        src="/quiz.svg"
        className="banner"
        // style={{ width: "100px", height: "100px" }}
        alt="quiz img"
      />
    </div>
  );
};

export default Home;
