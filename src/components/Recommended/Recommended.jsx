import React from "react";
import "./Recommended.scss";
import { images } from "../../constants";
import RecommendedDetails from "./RecommendedDetails";

const Recommended = () => {
  return (
    <section id='recommended' className='-mt-10'>
      <div className='container px-5 mx-auto mt-32 text-center'>
        <h2 className='text-lg font-bold text-center'>Recommended for you</h2>

        {/* recommended container */}
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-12 py-10'>
          <RecommendedDetails
            title='The complete 2022 Chair 
            development bootcamp '
            name='Mr John Ugo'
            rating={4}
            price={300}
            number={1805600}
            image={images.recom1}
          />
          <RecommendedDetails
            title='The complete 2022 Chair 
            development bootcamp '
            name='Mr John Ugo'
            rating={5}
            price={350}
            number={180000}
            image={images.recom2}
          />
          <RecommendedDetails
            title='The complete 2022 Chair 
            development bootcamp '
            name='Mr John Ugo'
            rating={5}
            price={350}
            number={180000}
            image={images.recom3}
          />
          <RecommendedDetails
            title='The complete 2022 Chair 
            development bootcamp '
            name='Mr John Ugo'
            rating={5}
            price={350}
            number={180000}
            image={images.recom1}
          />
          <RecommendedDetails
            title='The complete 2022 Chair 
            development bootcamp '
            name='Mr John Ugo'
            rating={5}
            price={350}
            number={180000}
            image={images.recom2}
          />
          <RecommendedDetails
            title='The complete 2022 Chair 
            development bootcamp '
            name='Mr John Ugo'
            rating={5}
            price={350}
            number={180000}
            image={images.recom3}
          />
        </div>
      </div>
    </section>
  );
};

export default Recommended;
