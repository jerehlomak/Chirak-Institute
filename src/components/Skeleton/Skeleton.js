import React from "react";

const Skeleton = ({ type }) => {
  // const classes = `skeleton ${type}`;
  return (
    <div
      className={`bg-[#D7DAF6] my-1 rounded-sm ${
        type === "text" ? "w-full h-4" : "w-2/4 h-6 mb-2"
      }`}
    ></div>
  );
};

export default Skeleton;
