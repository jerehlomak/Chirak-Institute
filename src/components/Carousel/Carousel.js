import React, { useState } from "react";
import Rating from "../Rating/Rating";
import Slider from "react-slick";
const Carousel = ({ COURSE_DATA }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    className: "text-center",
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
  const [review, setReview] = useState(4);
  return (
    <Slider {...settings}>
      {COURSE_DATA.map(({ name, imageUrl, students, id }) => (
        <div className='w-36 md:!w-64 text-center' key={id}>
          <>
            <div
              className='h-64 w-full bg-cover bg-no-repeat text-center flex flex-col justify-end items-center rounded-r-3xl rounded-bl-3xl'
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 123%), url(${imageUrl})`,
                objectFit: "fill",
              }}
            >
              <div className='pb-5 text-center'>
                <h3 className='text-white'>{name}</h3>
                <div className='flex'>
                  <Rating
                    rate={review}
                    onRating={(rateCount) => setReview(rateCount)}
                  />
                  <span className='text-white ml-2'> 4.0</span>
                </div>
                <p className='text-white text-xs'>{students} Students</p>
              </div>
            </div>
          </>
          <div className='text-center py-3'>
            <h4 className='font-medium text-sm md:text-base'>
              The complete 2022 Chair development bootcamp
            </h4>
            <h5 className='text-red-500 font-bold text-sm md:text-base'>
              $ 350
            </h5>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
