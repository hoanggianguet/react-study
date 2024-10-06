import React from "react";
import { replace, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen h-screen">Home Component</div>
      <button onClick={() => navigate("/order-summary", { replace: true })}>
        Buy now
      </button>
    </>
  );
};

export default Home;
