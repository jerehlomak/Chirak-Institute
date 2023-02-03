import React from "react";
import "./Main.scss";
import { images } from "../../constants";
import { BiBookOpen } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdFace } from "react-icons/md";
import { MdArrowDropDownCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import TinyFlag from "tiny-flag";
import { GiUsaFlag } from "react-icons/gi";
import { BsBellFill } from "react-icons/bs";

import Carousels from "../Carousels/Carousels";

const Main1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section id='main'>
        <Carousels />
        {/* flex container */}
      </section>

      {/* skills */}
      <section>
        <div className='container flex flex-col px-4 mx-auto space-y-10 xs:mb-16 xs:-mt-10 sm:mt-4 md:mt-52 md:flex-row'>
          {/* content right */}
          <div className='flex flex-col space-y-12 sm:-mt-14 md:w-1/2 md:mt-12 lg:mt-12'>
            <h2 className='max-w-md text-4xl font-bold md:text-left lg:text-left'>
              80% Skill <br />
              20% Professional <br />
              With 100% interactive <br />
              e-classroom
            </h2>
          </div>
          {/* content left */}
          <div className='flex flex-col space-y-12 md:w-1/2 items-center justify-center'>
            <p className='max-w-sm font-bold md:text-left lg:text-left'>
              Learn with the best world class platform. Choose a skill and start
              learning from great minds
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main1;
