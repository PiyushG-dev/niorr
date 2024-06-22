import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ShineBorder from "./shine-border";

const PlaylistCard = ({ card, song, youtube, spotify }) => {
  return (
    <div className="flex flex-col gap-2">
      <ShineBorder
        className="text-center text-2xl font-bold capitalize"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <Image src={card} className="rounded-md" />
      </ShineBorder>
      <div className="flex justify-between">
        <p className="font-light text-gray-300">{song}</p>
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faSpotify} className="w-6 text-[#21D760]" />
          <FontAwesomeIcon icon={faYoutube} className="w-7 text-[#ED2526]" />
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
