import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Events } from "./Components/Events";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
