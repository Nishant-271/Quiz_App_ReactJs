import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Result = ({ name, score }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div
      className="result"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "60vh",
        textAlign: "center",
      }}
    >
      <span style={{ fontSize: "35px", color: "#124", fontWeight: "bold" }}>
        Final Score : {score}
      </span>
      <Button
        variant="contained"
        color="secondary"
        href="/"
        style={{
          alignSelf: "center",
          marginTop: "20px",
          backgroundColor: "#124",
        }}
        size="large"
      >
        Go To HomePage
      </Button>
    </div>
  );
};

export default Result;
