import React from "react";
import PlaylistCard from "@/components/ui/playlist-card.jsx";
import { playlist } from "@/constants";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Playlist = () => {
  return (
    <section>
      <div className="screen-inner-width py-14 px-5 sm:px-10 flex flex-col gap-10 xs:px-5">
        <div className="flex flex-col gap-3 text-center items-center">
          <AnimatedGradientText>
            🎧 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Playlist
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-5xl font-semibold text-gray-200 sm:text-4xl">
              Our Exclusives
            </h1>
            <h3 className="text-gray-400 text-xl font-light sm:text-lg">
              We are a record label created by artists, for artists.
            </h3>
          </div>
          <Button size="lg">Contact us</Button>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
          {playlist.map((item) => {
            return (
              <PlaylistCard
                key={item.id}
                card={item.card}
                song={item.song}
                youtube={item.youtube}
                spotify={item.spotify}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Playlist;
