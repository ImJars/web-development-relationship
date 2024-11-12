import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Story from "./Story";
import Gallery from "./Gallery";
import ComingSoon from "./ComingSoon";
import Header from "./components/Home/header";

function ReactDom() {
  return (
    <>
      <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      >
      <Header />
        <Routes>
          {/* Links to Header pages: */}
          <Route path="/" element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="comingsoon" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default ReactDom;
