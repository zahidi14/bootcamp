import React from "react";
import { Routes, Route } from "react-router-dom";
import { Checkout, Explore, Main } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Router;
