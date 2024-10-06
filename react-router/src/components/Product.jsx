import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <input type="search" placeholder="Search Product"></input>
      <br/>
      <nav>
      <Link to="featured">Featured</Link>
      <Link to="trending">Trending</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Product;
