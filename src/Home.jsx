import React from "react";
import Header from "./components/Home/header";
import HomeBackground from "./components/Home/homeBackground";
import HomeScreen from "./components/Home/homeScreen";

function Home() {
  return (
    <>
      <section className="w-full h-dvh">
        <HomeBackground />
        <Header />
        <HomeScreen />
      </section>
    </>
  );
}

export default Home;
