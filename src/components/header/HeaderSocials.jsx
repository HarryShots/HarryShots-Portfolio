import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/bobgala-harrison-525568198/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.instagram.com/harryshots_photography/"
        target="_blank"
      >
        <BsInstagram />
      </a>
      <a href="https://github.com/HarryShots" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
