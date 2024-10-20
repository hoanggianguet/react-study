import React from "react";

import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarList";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <div className="container is-fluid">
      <CarSearch />
      <CarForm />

      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
