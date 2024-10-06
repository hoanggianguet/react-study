import React, { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter");
  return (
    <div>
      <div>User 1</div>
      <nav>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams()}>Reset Filter</button>
      </nav>
      {/* <Outlet /> */}
      <div>
        {showActiveUsers ? <h1>Show Active Users</h1> : <h2>Show All users</h2>}
      </div>
    </div>
  );
};

export default User;
