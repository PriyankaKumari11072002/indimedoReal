import React, { useCallback } from "react";
import { useParams } from "react-router-dom";


import { useState } from "react";
import { calculateDiscountPercentage } from "../../ProductCard/ProductCard";

import { useProductDtaWithIdQuery } from "../../services/apis/product";
import ProductDetailImages from "./productDetailImages";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/Navbar";
import AddToCart from "./AddToCart";
import ProductDescriptionAndBenifits from "./productDescriptionAndBenifits";
import VeiwCardItems from "./veiwCardItems";

const ProductCardDetails = () => {
  const [clickImages, setClickImages] = useState(false);
  const [clickImagesId, setClickImagesId] = useState("");
  const params = useParams();

  const { data } = useProductDtaWithIdQuery(`/${params.id}`);

  const handleImages = useCallback(
    (images) => {
      setClickImages(true);
      setClickImagesId(images);
    },
    [params.id]
  );


  return (
    <>


      <div
        className="flex justify-between align-middle   mt-10"
        style={{ width: "85%",paddingLeft:"150px" }}
      >

        <div className="flex justify-around align-middle  "   style={{ width: "80%" }} >

          <ProductDetailImages
            data={data}
            clickImages={clickImages}
            clickImagesId={clickImagesId}
            handleImages={handleImages}
          />
           

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
            <ul>
              Product highlights:
              {data?.highlights.map((highlights)=>(
           <li>{highlights} </li>
              ))}
             
            </ul>


          </div>
         
        </div>

        <div style={{ width: "20%" }}>
      <AddToCart   data={data}/> 
        {/* <VeiwCardItems /> */}
       

        </div>

      </div>

      <ProductDescriptionAndBenifits  data={data}/>
    </>
  );
};

export default ProductCardDetails;
