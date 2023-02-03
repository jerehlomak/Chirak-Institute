import React from 'react'
import Slider from "react-slick";
import StarRating from "../StarRating";
import { images } from '../../constants';


const Sliders = ({ COURSE_DATA }) => {
  const settings = {
    dots: true,
    className: "center",
    //centerMode: true,
    centerPadding: "100px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
    <Slider {...settings}>
      {COURSE_DATA.map(
        ({ name, imageUrl, students, id, reviews, title, price }) => (
          <div
            key={id}
            className='relative w-full p-4 place-items-center flex flex-col mx-auto justify-center items-center space-y-6 rounded-lg '
          >
            <div className='relative'>
              {/* <div
                style={{
                  backgroundImage: `linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url(${imageUrl})`,
                }}
                className='h-72 bg-cover'
              /> */}
              <div class='relative mix-blend-overlay h-64 rounded-tr-xl rounded-b-xl'>
                <img
                  src={imageUrl}
                  class='absolute h-64  w-full object-cover object-center opacity-40'
                />
                <div class='absolute -z-10 bg-gradient-to-t from-black via-[#1a1a1a] to-[#333333] h-64 w-full rounded-tr-xl rounded-b-xl' />
              </div>

              <div className='absolute flex flex-col items-center inset-x-0 -mt-20'>
                <p className='text-white font-bold'>{name}</p>
                <StarRating rating={reviews} />
                <p className='text-white mt-0'>{students} Students</p>
              </div>
              <div className='text-center mt-3'>
                <h6 className='font-bold text-base text-center leading-none'>
                  {title}
                </h6>
                <p className='text-[#ff0000] pt-2'>
                  <strong>$ {price}</strong>
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </Slider>
  );
};

export default Sliders;
