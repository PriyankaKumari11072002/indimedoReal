import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addProductToCart} from '../../redux/features/cartSlice'
import { useAddMutation, useLazyGetCartQuery } from "../../services/apis/product";
import {
  Card,
  Typography,
  Button,
  CardActions,
  CardContent,
  Select,
  MenuItem,
} from "@mui/material";
import { calculateDiscountPercentage } from "../../ProductCard/ProductCard";
import VeiwCardItems from "./veiwCardItems";
import { addProductToCart } from "../../redux/features/cartSlice";
import SelectItems from "../../components/Common/Select";

const AddToCart = ({ data }) => {
  const [cardData, setcardData] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // console.log(cart,'cartcount')
  const [quantity, setQuantity] = useState(1);
  const [productIncriment, setproductIncriment] = useState(false);
  const [viewCartOpen, setviewCartOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [addToCart, response] = useAddMutation();
  const [getcartData] = useLazyGetCartQuery();
  // const cartLength = data?.products.length

  //  console.log(response,'res')
  const [isTitleExpanded, setIsTitleExpanded] = useState(false);

  const toggleTitleExpansion = () => {
    setIsTitleExpanded(!isTitleExpanded);
  };

  const handleAddToCart = async (product) => {
    //setproductIncriment(true)
    //setviewCartOpen(true)
    // dispatch(addProductToCart({cart:product,count:1}))

    try {
      await addToCart({
       
        
        productId: product._id,
            count: quantity,
      
       
      }).then((item) =>
        getcartData().then((data) =>  //updating cart data when user add or increase product data
          dispatch(addProductToCart(data?.data?.products))
        )
      );
    } catch (error) {
      console.error("Error adding item to cart:", error);
    } finally {
    }
    
  };

  function handleDecriment() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      {!viewCartOpen ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, backgroundColor: "" }}
              color="text.secondary"
              gutterBottom
            >
              social-cue259 people bought this recently
            </Typography>
            <Typography variant="p" component="div">
              {/* {data?.title} */}
              {isTitleExpanded
                ? data?.title
                : `${data?.title.slice(0, 50)}${
                    data?.title.length > 50 ? "..." : ""
                  }`}
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                onClick={toggleTitleExpansion}
              >
                {isTitleExpanded ? "Show less" : "Show more"}
              </span>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h6 className="flex   " style={{ marginTop: "10px" }}>
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
              social-cue259 people bought this recently
            </Typography>

            <button
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
