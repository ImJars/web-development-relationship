import React from "react";
import Header from "./components/header";
import HomeBackground from "./components/homeBackground";

function Home() {
  return (
    <>
      <section className="w-full h-dvh bg-backgroundColor_White">
        <HomeBackground />
        <Header />
      </section>
    </>
  );
}

export default Home;
