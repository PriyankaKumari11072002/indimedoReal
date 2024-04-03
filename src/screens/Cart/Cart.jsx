import { Heart, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { calculateDiscountPercentage } from "../../ProductCard/ProductCard";
import { MenuItem, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {

  useCartRemoveMutation,
  useCartUpdateMutation,
  useLazyGetCartQuery,
} from "../../services/apis/product";
import { addProductToCart } from "../../redux/features/cartSlice";
import Header from "../../components/header/header";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart,'cart')


  const { count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

//  console.log(PriceDetails, "PriceDetails");



  const [getcartData] = useLazyGetCartQuery();

  const [quantity, setQuantity] = useState(1);
  const [quantity1, setQuantity1] = useState();
  const [updateCart] = useCartUpdateMutation();
  const [removeCart] = useCartRemoveMutation();

  
  const handleRemove = async (DeleteId) => {
 
     try {
        await removeCart({
          productId: DeleteId
        
        }).then((item) =>
    
          getcartData().then((data) =>
            dispatch(addProductToCart(data))
          )
        );
      } catch (error) {
        console.error("Error adding item to cart:", error);
      } 


};
 

  const handleUpdateToCart = async (productId, count) => { 
    console.log(productId,count,'count')
    if(count>=1){
      try {
        await updateCart({
          productId: productId,
          count,
        }).then((item) =>
          getcartData().then((data) =>
          // console.log(data?.data?.products,'data'),


             dispatch(addProductToCart(data))
          )
        );
          } catch (error) {
        console.error("Error adding item to cart:", error);
      } 
      // finally {
      //  window.location.reload()
      // }

    }};
 


  return (
    
    <div>
      {/* <button  onClick={dispatch()}>click:</button> */}

      {/* <button  onClick={()=>setQuantity(quantity+1)}>click:{quantity}</button> */}
        {/* {cart?.map((data)=>(
          <>{data.product.title}</>
        ))} */}
     
    </div>
  );
}
export default Cart;
