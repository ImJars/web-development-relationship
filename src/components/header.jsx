import React from "react";

function Header() {
  return (
    <>
      <header className="w-full">
        <div className="flex justify-between items-center px-12 py-5">
          <div className="">
            <h1>Lovely</h1>
          </div>
          <div>
            <nav className="">
              <ul className="flex space-x-8">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#services">Story</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <button>
                    <a href="#login">Login</a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
