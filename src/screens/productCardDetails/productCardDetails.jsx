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
        className="   mt-10   w-[85%]   "
        style={{display:'flex',justifyContent:'space-around',alignItems:"center"}}
      >

        <div className="flex justify-around align-middle  "    >

          <ProductDetailImages
            data={data}
            clickImages={clickImages}
            clickImagesId={clickImagesId}
            handleImages={handleImages}
          />
           

          <div    style={{ padding: "20px 80px" }}  className="hidden  lg:block">
            <h1  >{data?.title}</h1>
            <h4   style={{ marginTop: "15px" ,color:"green"}}>{data?.manufacturer}</h4>

            <h6 className="flex   "  style={{ marginTop: "10px" }}>
              &#8377;{data?.sale_price}&nbsp;&nbsp;&nbsp;

              <span className="text-gray-600  line-through">
                MRF&#8377;{data?.reagular_price} 
              </span>
              <span  className="text-[#008000]   hidden lg:block">
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

        <div style={{ width: "20%" }}>
      <AddToCart   data={data}   /> 
        {/* <VeiwCardItems /> */}
       

        </div>

      </div>

      <ProductDescriptionAndBenifits  data={data}/>
    </>
  );
};

export default ProductCardDetails;
