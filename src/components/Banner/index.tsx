"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const Banner = () => {
  return (
    <section className="w-full h-full  flex items-center justify-center">
      <ReactPlayer
       
        url="/banner_movie.mp4"
        width="100%"
        height="80%"
        light="/tumb.svg"
        controls={true}
       
      />
    </section>
  );
};

export default Banner;
