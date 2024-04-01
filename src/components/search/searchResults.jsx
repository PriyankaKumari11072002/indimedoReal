import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { calculateDiscountPercentage } from "../../ProductCard/ProductCard";
import {
  setSearchTerm1,
  setQueryResults,
} from "../../redux/features/searchSlice";
import { useEffect } from "react";
import { useLazyProductSearchByQueryQuery } from "../../services/apis/product";

export default function SearchResults() {
  const searchResults = useSelector((state) => state.search.queryResults);
  const searchId = useParams();
  const dispatch = useDispatch();
  const [searchProduct, { isError }] = useLazyProductSearchByQueryQuery();
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (searchId.id.trim() !== "") {
      searchProduct(searchId.id).then((response) => {
        dispatch(setQueryResults(response.data || []));
      });
    }
  }, [searchId.id]);

  return (
    <>
      <div className="bg-white  mb-6">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-[100%] lg:px-8  ">
          <h1 className="text-center  p-3"></h1>
          {isError ? (
            <p>
              No results found for{" "}
              <span style={{ color: "green" }}>{searchId.id}</span>. Showing the
              most relevant results.
            </p>
          ) : (
            <p>
              Search results for{" "}
              <span style={{ color: "green" }}>{searchId.id}</span>
            </p>
          )}
          <div className="  mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 xl:gap-x-8 xl:grid-cols-7 2xl:grid-cols-8 ">
            {searchResults && searchResults.length > 0
              ? searchResults.map((product) => (
                  <Link to={`/product/${product._id}`}>
                    <div className="  rounded-lg bg-white  overflow-hidden shadow-lg duration-300  hover:shadow-lg ">
                      <div className="  ">
                        <img
                          src={product.images_Src[0]}
                          alt="{product.Image_URL}"
                          className="h-40 w-full mx-auto object-contain object-center  "
                        />
                      </div>
                      <div className=" p-4">
                        <h6 className=" text-white-900  font-medium text-xs pl-3  mt-1  h-8 overflow-hidden">
                          {product.title.length > 20
                            ? product.title.slice(0, 20) + "..."
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
                          <p className=" pl-3 font-medium text-xs">
                            &#8377;{product.sale_price}
                          </p>
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
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}
