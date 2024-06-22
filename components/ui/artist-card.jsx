import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ShineBorder from "./shine-border";

const ArtistCard = ({ card, name, youtube, spotify, instagram }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className=" text-xl text-gray-300 text-center">{name}</p>

      <ShineBorder
        className="text-center text-2xl font-bold capitalize"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <Image src={card} className="rounded-md" />
      </ShineBorder>
      <div className="flex gap-5 justify-center">
        <FontAwesomeIcon icon={faInstagram} className="w-5" />
        <FontAwesomeIcon icon={faSpotify} className="w-5" />
        <FontAwesomeIcon icon={faYoutube} className="w-6" />
      </div>
    </div>
  );
};

export default ArtistCard;
