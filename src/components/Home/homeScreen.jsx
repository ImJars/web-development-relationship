import React from "react";

function HomeScreen() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center font-poppins tracking-tighter z-20">
        <div className="flex flex-col text-center">
          <h1 className="text-6xl font-extrabold text-textColor_Gray font-poppins">
            Paulette
          </h1>
          <p className="text-3xl font-extrabold text-textColor_Purple">&</p>
          <h1 className="text-6xl font-extrabold text-textColor_Gray">Ángel</h1>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
