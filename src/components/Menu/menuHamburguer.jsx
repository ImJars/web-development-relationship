import React, { useState } from "react";
import "./menuHamburguer.css";

function MenuHamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="block sm:hidden">
        <div
          id="nav-icon3"
          className={isOpen ? "open" : ""}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default MenuHamburguer;
