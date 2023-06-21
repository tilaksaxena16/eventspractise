import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Events } from "./Components/Events";
import { EventPractise } from "./Components/EventPractise";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Events />} />
          <Route exact path="/event" element={<EventPractise />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
