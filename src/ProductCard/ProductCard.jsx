


import { Link } from "react-router-dom";
export function calculateDiscountPercentage(regularPrice, salePrice) {
  const discount = ((regularPrice - salePrice) / regularPrice) * 100;
  return discount.toFixed(2);
}

 function ProductCard({ product }) {



  return (
    <>
   {/* {`/product/${item?._id}`} */}
      <div key={product.id}>
      <Link  to={`/product/${product?._id}`}>
    <div className="w-100  p-2  mr-2  cursor-pointer
    bg-white  overflow-hidden shadow duration-300  hover:shadow-lg 
    ">
          <div className="">
            <img
              src={product.images_Src[0]}
              alt="{product.Image_URL}"
              className="h-28 p-2 w-full object-contain object-center "
            />
          </div>
          <div className="">
            <h6 className=" text-white-900  font-medium text-xs pl-3  mt-1  h-8 overflow-hidden">
         
              {product.title.length > 30
                ? product.title.slice(0, 30) + "..."
                : product.title}
            </h6>
          
          </div>

          <div className="">
            <p className=" font-normal   pl-3  mt-1 text-xs text-gray-500">
              MRP{" "}
              <span className="line-through text-gray-500">
                &#8377;{product.reagular_price}
              </span>
            </p>
            <div className="flex items-center align-middle ">
              <p className=" pl-3 font-medium text-xs">&#8377;{product.sale_price}</p>
              <p className=" pl-3   text-green-700">
             
                {calculateDiscountPercentage(
                  product.reagular_price,
                  product.sale_price
                )}
                %
              </p>
            </div>
          </div>
        </div>
    </Link>
      </div>

    </>
  );
}

export default ProductCard;
