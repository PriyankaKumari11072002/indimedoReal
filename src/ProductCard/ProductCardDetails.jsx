import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useProductDtaWithIdQuery } from "../services/apis/product";
import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@mui/material";
import "../index.css";
import { useState } from "react";
import { calculateDiscountPercentage } from "./ProductCard";
import ProductCardImages from "./ProductCardImages";
import AddToCart from "../screens/productCardDetails/AddToCart";

const ProductCardDetails = () => {
  const [clickImages, setClickImages] = useState(false);
  const [clickImagesId, setClickImagesId] = useState("");
  const params = useParams();

  const { data } = useProductDtaWithIdQuery(`/${params.id}`);
  console.log(data, "data");
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
        className="flex justify-between align-middle "
        style={{ width: "100%" }}
      >
        <div className="flex justify-around align-middle  gap-9">
          <ProductCardImages
            data={data}
            clickImages={clickImages}
            clickImagesId={clickImagesId}
          />

          <div>
            <h1>{data?.title}</h1>
            <h4>{data?.manufacturer}</h4>
            <h6 className="flex justify-around align-middle shadow   gap-6">
              &#8377;{data?.sale_price}
              <span className="text-gray-100  line-through">
                MRF&#8377;{data?.reagular_price}
              </span>
              <span>
                {calculateDiscountPercentage(
                  data?.reagular_price,
                  data?.sale_price
                )}
                %
              </span>
              <AddToCart />
            </h6>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <h1>Please add item(s) to proceed</h1>
          <button className="">Veiw Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCardDetails;
