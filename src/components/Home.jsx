import React from "react";
// import "./App.css";
import { categories, limits, difficulties } from "../hardCode";
import List from "./List";
import { Link } from "react-router-dom";

const Home = ({
  setCategory,
  setDifficulty,
  setLimit,
  limit,
  category,
  difficulty,
}) => {
  return (
    <div className="w-fit bg-white bg-opacity-70 flex flex-col gap-7 rounded outline-dashed outline-violet-500 text-[6px] lg:text-xs">
      <h1 className=" text-[.70rem] md:text-sm text-center relative top-4 font-extrabold animate-bounce">
        CUSTOMISE YOUR QUIZ!
      </h1>
      <div className=" text-center w-fit overflow-hidden self-center gap-1 p-1 md:flex md:flex-flow-row  md:content-center md:justify-center ">
        <List
          id={0}
          tag={"Categories"}
          data={categories}
          setState={setCategory}
          state={category}
        />
        <List
          id={1}
          tag={"Number of Questions"}
          data={limits}
          setState={setLimit}
          state={limit}
        />
        <List
          id={2}
          tag={"Difficulty"}
          data={difficulties}
          setState={setDifficulty}
          state={difficulty}
        />
      </div>
      <div className=" relative bottom-4 self-center animate-pulse bg-violet-500 rounded p-1 shadow-md  w-fit text-white">
        <Link to="quiz">Start!</Link>
      </div>
    </div>
  );
};

export default Home;
