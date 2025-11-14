import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../components/list.json";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data) => data.price === 99);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
       {
      breakpoint: 768, // mobile screen
      settings: {
        slidesToShow: 1,
      },
    },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="text-2xl font-semibold pb-2">Courses offered @99</h1>
          <p className="my-5">
            Great stories don’t always come at a great price. Get this beautiful
            read for just ₹99, and let every page take you on a new adventure —
            without burning your pocket.Some books change lives — and this one
            could change yours for just ₹99. Don’t miss the chance to own a
            story that stays with you forever.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}

         
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
