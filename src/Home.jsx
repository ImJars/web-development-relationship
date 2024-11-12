import React from "react";
import HomeBackground from "./components/Home/homeBackground";
import HomeScreen from "./components/Home/homeScreen";

function Home() {
  return (
    <>
      <section className="w-full h-dvh">
        <HomeBackground />
        <HomeScreen />
      </section>
    </>
  );
}

export default Home;
