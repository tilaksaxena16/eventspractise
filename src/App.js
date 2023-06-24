import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Events } from "./Components/Events";
import { EventPractise } from "./Components/EventPractise";
import { Eventdemo } from "./Components/Eventdemo";
import { Emical } from "./Components/Emical";
import { Regdemo } from "./Components/Regdemo";
import { TimerEvent } from "./Components/TimerEvent";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Events />} />
          <Route exact path="/event" element={<EventPractise />} />
          <Route exact path="/eventdemo" element={<Eventdemo />} />
          <Route exact path="/emi" element={<Emical />} />
          <Route exact path="/reg" element={<Regdemo />} />
          <Route exact path="/timer" element={<TimerEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
