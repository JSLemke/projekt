import React from 'react';
import NatureVideo from "../assets/Videos/20776245-hd_1920_1080_30fps.mp4";
import Hero from '../components/Hero/Hero';
const Home = () => {
  return (
  <>
   <div>
      <div className="relative h-[700px]">
        <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-[700px] 
        w-full object-cover z-[-1]"> 
        <source src={NatureVideo} type='video/mp4'/> 
        </video>
        <Hero/>
      </div>
   </div>
  </>
  );
};

export default Home