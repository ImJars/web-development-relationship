import React from "react";
import RotatingText from "../Menu/rotatingText";

function HomeScreen() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center z-20">
        <div className="flex flex-col text-center font-poppins font-extrabold text-6xl text-textColor_Gray">
          <h1>Paulette Hernández</h1>
          <span className="text-3xl font-extrabold text-textColor_Purple">
            &#38;
          </span>
          <h1>Ángel Ramírez</h1>
        </div>
        <div>
          <RotatingText />
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
