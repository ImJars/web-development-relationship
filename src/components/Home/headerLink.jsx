import React from "react";

function HeaderLink({ url, title__Section }) {
  return (
    <>
      <li className="font-sans">
        <a className="text-color_Blue text-lg font-medium" href={url}>{title__Section}</a>
      </li>
    </>
  );
}

export default HeaderLink;
