import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ShineBorder from "./shine-border";
import Link from "next/link";

const PlaylistCard = ({ card, song, youtube, spotify }) => {
  return (
    <div className="flex flex-col gap-2">
      <ShineBorder
        className="text-center text-2xl font-bold capitalize"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <Link href={youtube}>
          <Image src={card} className="rounded-md" />
        </Link>
      </ShineBorder>
      <div className="flex justify-between">
        <p className="font-light text-gray-300">{song}</p>
        <ul className="flex gap-2">
          <li>
            <Link href={spotify}>
              <FontAwesomeIcon
                icon={faSpotify}
                className="w-6 text-[#21D760]"
              />
            </Link>
          </li>
          <li>
            <Link href={youtube}>
              <FontAwesomeIcon
                icon={faYoutube}
                className="w-7 text-[#ED2526]"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlaylistCard;
