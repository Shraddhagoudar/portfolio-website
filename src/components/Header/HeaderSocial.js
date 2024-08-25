import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";


export const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/shraddha-v-goudar-8692b8218" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Shraddhagoudar" target="_blank">
        <FaGithub />
      </a>
      {/* <a href="https://www.hackerrank.com/prasannanaik141?hr_r=1a" target="_blank">
        <FaHackerrank />
      </a> */}
    </div>
  );
};
