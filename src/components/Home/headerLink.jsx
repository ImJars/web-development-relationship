import React from "react";
import { Link } from "react-router-dom";

function HeaderLink({ url, title__Section }) {
  return (
    <>
      <li className="font-sans">
        <Link className="text-color_wine text-lg font-bold" to={url}>{title__Section}</Link>
      </li>
    </>
  );
}

export default HeaderLink;
