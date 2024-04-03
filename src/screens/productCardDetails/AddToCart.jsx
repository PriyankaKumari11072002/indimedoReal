import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useAddMutation, useLazyGetCartQuery } from "../../services/apis/product";
import {
  Card,
  Typography,

  CardContent,

} from "@mui/material";
import { calculateDiscountPercentage } from "../../ProductCard/ProductCard";

import { priceDetails, addProductToCart } from "../../redux/features/cartSlice";
import SelectItems from "../../components/Common/Select";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ data }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

   const { count } = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);

  const [viewCartOpen, setviewCartOpen] = useState(false);

  const [addToCart] = useAddMutation();
  const [getcartData,response] = useLazyGetCartQuery();

 
  const [isTitleExpanded, setIsTitleExpanded] = useState(false);

  const toggleTitleExpansion = () => {
    setIsTitleExpanded(!isTitleExpanded);
  };

  const handleAddToCart = async (product) => {
    dispatch(priceDetails({total:10})),
    setviewCartOpen(true)
   

    try {
      await addToCart({
       
        
        productId: product._id,
            count: quantity,
      
       
      }).then((item) =>
        getcartData().then((data) =>  
 
//console.log(data.data,'.....data')

  dispatch(addProductToCart(data?.data))
        )
      );
    } catch (error) {
      console.error("Error adding item to cart:", error);
    } finally {
    }
    
  };

  

  return (
    <>
      {!viewCartOpen ? (
        <Card sx={{ minWidth: 275 ,marginBottom:"30px"}}  className="">
          <CardContent>
           
            <Typography variant="p" component="div"  className="hidden  md:hidden lg:block">
            
              {isTitleExpanded
                ? data?.title
                : `${data?.title.slice(0, 50)}${
                    data?.title.length > 50 ? "..." : ""
                  }`}
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "500px",
                }}
                onClick={toggleTitleExpansion}
              >
                {isTitleExpanded ? "Show less" : "Show more"}

              </span>

            </Typography>
            <span  className="hidden  md:block lg:hidden m-1">{data?.title}</span>
            <Typography sx={{ mb: 1.5 ,}} color="text.secondary">
              <h6 className="flex   " style={{ marginTop: "15px" }}>
                &#8377;{data?.sale_price}&nbsp;&nbsp;&nbsp;
                <span className="text-gray-600  line-through">
                  MRF&#8377;{data?.reagular_price}
                </span>
                <span className="text-[#008000]">
                  &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  {calculateDiscountPercentage(
                    data?.reagular_price,
                    data?.sale_price
                  )}
                  %&nbsp;
                </span>
              </h6>
            </Typography>

 <SelectItems
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ marginBottom: "5px", width: "50%" }}
      />

            <button
              onClick={() => handleAddToCart(data)}
              className="bg-[#008000]  font-sans  font-light  p-3 mt-12 text-BLACK "
              style={{
                width: "100%",
                marginTop: "50PX",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              ADD TO CART
            </button>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, backgroundColor: "" }}
              color="text.secondary"
              gutterBottom
            >
            Total price of cart items : 
            </Typography>
            <Typography
              sx={{ fontSize: 14, backgroundColor: "" }}
              color="text.secondary"
              gutterBottom
            >
           {count} Items added
            </Typography>

            <button  onClick={navigate('/cart')}
              className="  bg-[#008000]  font-sans  font-light  p-3 mt-12 text-BLACK "
              style={{
                width: "100%",
                marginTop: "50PX",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              View Cart
            </button>
          </CardContent>
        </Card>
      )}


    </>
  );
};

export default AddToCart;
