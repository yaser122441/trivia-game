import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Answers from "./Answers";

const Questions = ({ quiz }) => {
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  const Navigate = useNavigate();

  const questions = quiz.map((question, index) => {
    return (
      <div
        key={index}
        className={`bg-slate-100 bg-opacity-70  mx-2 rounded-3xl p-2 shadow-2xl outline-dotted outline-violet-400 mt-10 `}
      >
        {index + 1 + "- "}
        {question.question} <br />
        <Answers
          correctAnswer={question.correctAnswer}
          incorrectAnswers={question.incorrectAnswers}
          setNext={setNext}
          setScore={setScore}
        />
      </div>
    );
  });
  return (
    <div className={`grid grid-flow-row text-[7px] md:text-xs`}>
      <h1
        className={`md:p-[3px] w-fit h-fit font-black text-[8px] mx-auto absolute top-1 right-0 bg-violet-500 rounded text-white ${
          next === questions.length &&
          "animate-bounce relative md:text-[1.5rem] "
        } `}
      >
        Your Score Is: {score}/{questions.length}
      </h1>
      {questions[next]}
      <button
        id="back_btn"
        type="button"
        className={`h-4 w-4 hover:scale-110 duration-200 text-white absolute top-1 left-1 ${
          next === questions.length &&
          "animate-pulse justify-self-center relative md:text-[1.5rem] top-2 back_btn_end w-9 h-9"
        } `}
        onClick={() => Navigate("/")}
      ></button>
    </div>
  );
};

export default Questions;
