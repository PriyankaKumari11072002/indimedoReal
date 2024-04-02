import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { useProductDtaWithIdQuery } from "../../services/apis/product";
import { calculateDiscountPercentage } from "../../ProductCard/ProductCard";

export default function ResponsiveProductCardDetail({api}) {

  var settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
  };
  return (
    <Slider {...settings}>
   
      {/* <div
        className="flex  justify-between align-middle   mt-10 "
        style={{ width: "85%",paddingLeft:"150px" }}
      >

        <div className="flex justify-around align-middle  "   style={{ width: "80%" }} >

        

          <div    style={{ padding: "20px  80px" }}>
            <h1  >{data?.title}</h1>
            <h4   style={{ marginTop: "15px" ,color:"green"}}>{data?.manufacturer}</h4>

            <h6 className="flex   "  style={{ marginTop: "10px" }}>
              &#8377;{data?.sale_price}&nbsp;&nbsp;&nbsp;
              <span className="text-gray-600  line-through">
                MRF&#8377;{data?.reagular_price} 
              </span>
              <span  className="text-[#008000]">
              &nbsp;&nbsp;&nbsp;&nbsp; {calculateDiscountPercentage(
                  data?.reagular_price,
                  data?.sale_price
                )}
                %&nbsp;
              </span>
              
            </h6>
            <ul  className="list-disc  mt-6">
              Product highlights:
              {data?.highlights.map((highlights)=>(
           <li>{highlights} </li>
              ))}
             
            </ul>


          </div>
         
        </div>

     

      </div> */}
    </Slider>
  );
}