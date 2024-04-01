import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import ProductCard from "../../ProductCard/ProductCard";

export default function SliderComponent({ title, api,style }) {

 const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: false,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 9,
          // slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 8,
          // slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          // slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          // slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 3,
        },
      },
    ],
  };

  const slickPrevNextStyles = `
  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

  return (
    <div className="my-6   "  style={{width:"100%"}} >
      <style>{slickPrevNextStyles}</style>

      <h1>{title}</h1>
      <Slider {...settings} className="flex-wrap"  >
        {api?.map((apiItem) => (
          <ProductCard key={apiItem._id} product={apiItem} />
        ))}
      </Slider>
    </div>
  );
}
