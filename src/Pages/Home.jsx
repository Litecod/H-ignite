import React from "react";
import Hero from "../Component/Hero";
import HeroCon from "../Component/HeroCon";
import Service from "../Component/Service";
import ServiceCon from "../Component/ServiceCon";
import Testimonial from "../Component/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroCon />
      <Service />
      <ServiceCon />
      <Testimonial />
    </>
  );
};

export default Home;
