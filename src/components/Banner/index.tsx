"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const Banner = () => {
  return (
    <section className="w-full h-full  flex items-center justify-center  ">
      <ReactPlayer
        className="videoFrame"
        url="/banner_movie.mp4"
       
        light="/cs.jpeg"
        controls={true}
       
      />
    </section>
  );
};

export default Banner;
