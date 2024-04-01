import React, { useState, useEffect } from 'react';
import { Trash } from 'lucide-react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/header';
import { calculateDiscountPercentage } from '../../ProductCard/ProductCard';
import { useMemo } from 'react';

function Cart1() {
  const { cart } = useSelector((state) => state.cart);
  const [quantities, setQuantities] = useState({});



  useEffect(() => {
    if (cart) {
      const quantitiesObj = {};
      cart.forEach((item) => {  //7
        quantitiesObj[item.product._id] = item.count;    
      });
      setQuantities(quantitiesObj);
    }
  }, [cart]);
console.log(quantities,'quantities')


  const handleRemove = useMemo((deleteId) => {
    console.log(deleteId,'unwanted fun call')
   // console.log(deleteId, 'deleteId');
    // Add logic to remove item from the cart
  },[cart]);


 //handleRemove()
  const handleDecrement = (productId) => {


    if (quantities[productId] > 1) {         //4>1
      setQuantities((prevQuantities) => ({  ////{34234:4,5435:5,4535:6,5646:6}
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const handleIncrement = async(productId) => {
    console.log(productId,'productId')
  
    // Add any validation logic here if needed
    setQuantities((prevQuantities) => ({
   ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));

    // try {
    //     await updateCart({
         
          
    //       productId:productId,
    //           count:6,
    //      }
    //     )
    //   } catch (error) {
    //     console.error("Error adding item to cart:", error);
    //   } finally {
    //   }
  };

  return (
 
    <div>
      {/* <Header /> */}
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
              <ul role="list" className="divide-y divide-gray-200">
                {cart?.map((items, id) => (
                  <div key={id} className="">
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          src={items.product.images_Src[0]}
                          className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                {items.product.title}
                              </h3>
                            </div>
                            <div className="mt-1 flex text-sm">
                              <p className="text-sm text-gray-500"></p>
                            </div>
                            <div className="mt-1 flex items-end">
                              <p className="text-xs font-medium text-gray-500 line-through">
                                {items.product.reagular_price}
                              </p>
                              <p className="text-sm font-medium text-gray-900">&nbsp;&nbsp;{items.product.sale_price}</p>
                              &nbsp;&nbsp;
                              <p className="text-sm font-medium text-green-500">
                                {calculateDiscountPercentage(
                                  items.product.reagular_price, items.product.sale_price
                                )} %&nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <div className="mb-2 flex">
                      <div className="min-w-24 flex">
                        <button type="button" className="h-7 w-7" onClick={() => handleDecrement(items.product._id)}>
                          -
                        </button>
                        <input
                          type="text"
                          className="mx-1 h-7 w-9 rounded-md border text-center"

                          value={quantities[items.product._id]}
                          readOnly
                        />
                        <button type="button" onClick={() => handleIncrement(items.product._id)} className="flex h-7 w-7 items-center justify-center">
                          +
                        </button>
                      </div>
                      <div className="ml-6 flex text-sm">
                        <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                          <Trash size={12} className="text-red-500" />
                          <span className="text-xs font-medium text-red-500" onClick={() => handleRemove(items.product._id)} >Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </section>

            {/* Your summary section */}
          </form>
        </div>
      </div>
    </div>


  );
}

export default Cart1;
