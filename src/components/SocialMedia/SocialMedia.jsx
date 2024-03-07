import React from "react";

const SocialMedia = ({link, name}) => {
  return (
    <li className="flex items-center">
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href={link ?? '#'}
        target="_blank"
      >
        {name}
        <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
        <span className="lg:hidden inline-block ml-2">Tweet</span>
      </a>
    </li>
  );
};

export default SocialMedia;
