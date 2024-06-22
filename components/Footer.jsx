import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr className="border-gray-700" />
      <div className="screen-inner-width py-7 px-5 sm:px-10 flex justify-between items-center gap-10 xs:px-5 xs:flex-col">
        <div>
          <p>Copyright © niorr.</p>
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <FontAwesomeIcon icon={faInstagram} className="w-6" />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} className="w-6" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className="w-6" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
