
import React, { Suspense, useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";



import Loading from "./components/Common/Loading/loading";
import Header1 from "./components/header/header1";

import Example1 from "./components/trial/example";
import Signup from "./screens/Signup/signup.jsx/Signup";
import Login from "./screens/login/login";
const ProductCard = React.lazy(() => import("./ProductCard/ProductCard"));
const Home = React.lazy(() => import("./screens/home/Home"));
const SearchResults = React.lazy(() => import("./components/search/searchResults"));
const ProductCardDetails = React.lazy(() => import("./screens/productCardDetails/productCardDetails"));
const Cart = React.lazy(() => import("./screens/Cart/Cart"));

// const Cart1 = React.lazy(() => import("./screens/Cart/cart1"));
export default function App() {
 
  return (
    <React.Fragment>

      <BrowserRouter>
      <div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ width: '100%' }}>
      {/* <Example/>  */}
        {/* <Header1 />
        <Navbar/>
         <Search1/>
         <Header1 /> */}
           <Header1 /> 
        <Example1/>
        </div>
    
    
      <div style={{ width: '87%', margin: '0 auto' }}>
      <Suspense fallback={  <Loading/>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<ProductCard />} />
            <Route path="/product/:id" element={<ProductCardDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search-results/:id" element={<SearchResults />} />
         
          </Routes>
        </Suspense>
      
       </div>
       </div>

       
      </BrowserRouter>
    </React.Fragment>
  );
}
