import React, { useEffect, useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    async function fetchQuiz() {
      await fetch(
        `https://the-trivia-api.com/api/questions?categories=${
          category ? category : "music"
        }&limit=${limit ? limit : 1}&difficulty=${
          difficulty ? difficulty : "easy"
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          setQuiz(data);
        })
        .catch((error) =>
          alert(
            "Authorization failed : " +
              error.message +
              "'\n'using a VPN might help"
          )
        );
    }
    fetchQuiz();
  }, [category, limit, difficulty]);

  return (
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setQuiz={setQuiz}
              setCategory={setCategory}
              setLimit={setLimit}
              setDifficulty={setDifficulty}
              limit={limit}
              difficulty={difficulty}
              category={category}
            />
          }
        />
<Route
          path="trivia-game"
          element={
            <Home
              setQuiz={setQuiz}
              setCategory={setCategory}
              setLimit={setLimit}
              setDifficulty={setDifficulty}
              limit={limit}
              difficulty={difficulty}
              category={category}
            />
          }
        />
        <Route
          path="quiz"
          element={
            <ProtectedRoute
              setLimit={setLimit}
              setDifficulty={setDifficulty}
              setCategory={setCategory}
              category={category}
              limit={limit}
              difficulty={difficulty}
            >
              <Questions quiz={quiz} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={
          <Home
              setQuiz={setQuiz}
              setCategory={setCategory}
              setLimit={setLimit}
              setDifficulty={setDifficulty}
              limit={limit}
              difficulty={difficulty}
              category={category}
            />} />
      </Routes>
  );
}

export default App;
