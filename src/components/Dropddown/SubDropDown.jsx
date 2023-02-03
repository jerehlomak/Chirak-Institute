import React, { useState } from "react";
import { DropData } from "./DropData";

const SubDropDown = ({ item }) => {
  const classes =
    "absolute w-44 h-60 left-44 top-8 bg-[#615353] rounded-lg shadow-md px-2 py-3 z-10 opacity-90 divide-y divide-neutral-500 divide-solid group-hover:block";
  const [drop, setDrop] = useState(false);

  return (
    <div className={classes}>
      <ul className="flex flex-col">
        {item.map((sub, index) => {
          console.log(sub.title);
          return (
            <li
              key={index}
              href={`${sub.path}`}
              className="absolute flex leading-5 mt-4 px-6 py-2 cursor-pointer hover:bg-gray-400 transition"
            >
              <span className="text-white text-xs mx-auto">{sub.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubDropDown;
