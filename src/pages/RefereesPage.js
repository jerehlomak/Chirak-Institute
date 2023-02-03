import React from "react";
import { Referees } from "../components";
import { Navbar } from "../components";

const RefereesPage = () => {
  return (
    <div className='background'>
      <Navbar />
      <div className='flex flex-col mt-16'>
        <Referees />
      </div>
    </div>
  );
};

export default RefereesPage;
