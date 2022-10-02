import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BoundEyeSiora from "./bound_eye_siora";
import Rasetsugari from "./rasetsugari";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/balloon_dream"} element={<Home />} />
          <Route path={"/bound_eye_siora"} element={<BoundEyeSiora />} />
          <Route path={"/rasetsugari"} element={<Rasetsugari />} />
        </Routes>
      </Router>
    </div>
  );
}
