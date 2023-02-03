import React from "react";
import COMMUNITY_DATA from "../CommunityData";
import Slider from "react-slick";

const Community = () => {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "text-center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container mx-auto px-4 py-10'>
      <h1 className='container text-base text-center font-bold py-3 xs:mb-4 md:py-6'>
        CHIRAK COMMUNITY
      </h1>
      <Slider {...settings}>
        {COMMUNITY_DATA.map(({ name, imageUrl, text, id }) => (
          <div className='w-full md:!w-60 text-center' key={id}>
            <div
              style={{ backgroundImage: `url(${imageUrl})` }}
              className='h-80 w-full bg-cover bg-no-repeat text-center flex flex-col justify-end items-center rounded-b-xl'
            >
              <div className='pb-5 text-center bg-black opacity-80 h-40 flex flex-col justify-center px-4 rounded-b-xl'>
                <h3 className='text-white'>{name}</h3>

                <p className='text-white text-xs'>{text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Community;
