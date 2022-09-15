import React from "react";

const List = ({ tag, data, state, setState, id }) => {
  const handleChange = (e) => {
    const selection = e.target.options[e.target.selectedIndex].value;
    setState(selection);
  };
  const options = data.map((singleData, index) => (
    <option
      key={index}
      value={
        typeof singleData === "string"
          ? singleData.replaceAll(" ", "_").replace("&", "and").toLowerCase()
          : parseInt(singleData)
      }
    >
      {singleData}
    </option>
  ));
  return (
    <div>
      <select
        onChange={handleChange}
        id={id}
        className=" rounded-lg bg-violet-500 shadow-xl outline-dotted outline-violet-500 text-white w-fit my-1 font-semibold h-8 cursor-pointer text-center"
      >
        <option hidden>
          {state === ""
            ? tag
            : state
                .replaceAll("_", " ")
                .replace("and", "&")
                .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
        </option>
        {options}
      </select>
    </div>
  );
};

export default List;
