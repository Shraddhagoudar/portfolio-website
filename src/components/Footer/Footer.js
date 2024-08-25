import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <a className="footer_logo">SHRADDHA</a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>{" "}
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
      </ul>
      <div className="footer_social">
        <a
          href="https://linkedin.com/in/shraddha-v-goudar-8692b8218"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Shraddhagoudar" target="_blank">
          <FaGithub />
        </a>
        {/* <a
          href="https://www.hackerrank.com/prasannanaik141?hr_r=1a"
          target="_blank"
        >
          <FaHackerrank />
        </a>{" "} */}
      </div>
      <div className="footer_copyright">
        <small>&copy;All rights reserved</small>
      </div>
    </footer>
  );
};
