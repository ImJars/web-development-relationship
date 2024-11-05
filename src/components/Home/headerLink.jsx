import React from "react";

function HeaderLink({ url, title__Section }) {
  return (
    <>
      <li className="font-sans">
        <a className="text-color_wine text-lg font-bold" href={url}>{title__Section}</a>
      </li>
    </>
  );
}

export default HeaderLink;
