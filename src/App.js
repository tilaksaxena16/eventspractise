import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Events } from "./Components/Events";
import { EventPractise } from "./Components/EventPractise";
import { Eventdemo } from "./Components/Eventdemo";
import { Emical } from "./Components/Emical";
import { Regdemo } from "./Components/Regdemo";
import { TimerEvent } from "./Components/TimerEvent";
import { Timerdemo } from "./Components/Timerdemo";
import { Classcomp } from "./Class-components/Classcomp";
import { Classexample } from "./Class-components/Classexample";
import { Formikdemo } from "./Formik-demo/Formikdemo";
import { Formikform } from "./Formik-demo/Formikform";


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
          <Route exact path="/timerdemo" element={<Timerdemo />} />
          <Route exact path="/class" element={<Classcomp />} />
          <Route exact path="/class1" element={<Classexample />} />
          <Route exact path="/form" element={<Formikdemo />} />
          <Route exact path="/formyup" element={<Formikform />} />


        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
