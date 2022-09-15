import React from "react";

const Answers = ({ correctAnswer, incorrectAnswers, setNext, setScore }) => {
  const colorChoice = (e) => {
    e.target.disabled = true;
    if (e.target.id !== "0") {
      document.getElementById("0").classList.add("green2", "text-white");
    }
    e.target.id === "0"
      ? e.target.classList.add("green")
      : e.target.classList.add("red");
    e.target.id === "0"
      ? e.target.parentElement.parentElement.classList.add(
          "green",
          "text-white",
          "outline-white"
        )
      : e.target.parentElement.parentElement.classList.add(
          "red",
          "text-white",
          "outline-white"
        );

    setTimeout(
      () => e.target.id === "0" && setScore((oldScore) => oldScore + 1),
      500
    );
    setTimeout(() => {
      setNext((oldNext) => oldNext + 1);
    }, 500);
  };
  const allAnswers = [correctAnswer, ...incorrectAnswers];
  const mapedAnswers = allAnswers.map((singleAnswer, index) => {
    return (
      <button
        key={index}
        id={index}
        className="rounded m-1 cursor-pointer hover:scale-105 duration-200 bg-purple-400 w-fit p-[3px] shadow-xl outline-slate-900 outline outline-1 active:scale-95 whitespace-pre-wrap md:outline-2 md:text-xs "
        onClick={(e) => colorChoice(e)}
      >
        {singleAnswer}
      </button>
    );
  });
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  shuffleArray(mapedAnswers);

  return (
    <span className=" rounded-full p-1 flex flex-wrap justify-center text-[6px] lg:text-xs">
      {mapedAnswers}
    </span>
  );
};

export default Answers;
