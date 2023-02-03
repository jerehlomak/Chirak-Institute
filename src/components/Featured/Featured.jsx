import React from "react";
import Slider from "react-slick";
import COMMUNITY_DATA from "../CommunityData";
import Rating from "../Rating/Rating";

const Featured = () => {
  function SampleNextArrow(props) {
    const { className, style } = props;
    return <div className={className} style={{ ...style, display: "none" }} />;
  }
  function SamplePrevArrow(props) {
    const { className, style } = props;
    return <div className={className} style={{ ...style, display: "none" }} />;
  }
  const settings = {
    dots: true,
    fade: true,
    // centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "text-center",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div>
      <Slider {...settings}>
        {COMMUNITY_DATA.slice(0, 3).map(
          ({ imageUrl, title, price, reviews, id }) => (
            <div className='w-full md:!w-60 text-center' key={id}>
              <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className='h-80 w-full bg-cover bg-no-repeat text-center flex flex-col justify-end items-center rounded-b-xl'
              >
                <div className='text-center bg-[#B2BEB5] opacity-80 h-28 flex flex-col justify-center px-4 rounded-b-xl '>
                  <h3 className='text-black font-semibold text-sm'>{title}</h3>
                  <Rating rating={reviews} />

                  <p className='text-[#ff0000]'>
                    <strong>$ {price}</strong>
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Featured;
