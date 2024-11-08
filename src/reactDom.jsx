import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function ReactDom() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* Links to Header pages: */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default ReactDom;
