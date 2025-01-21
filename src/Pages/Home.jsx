import React from "react";
import Hero from "../Component/Hero";
import HeroCon from "../Component/HeroCon";
import Service from "../Component/Service";
import ServiceCon from "../Component/ServiceCon";
import Testimonial from "../Component/Testimonial";
import Question from "../Component/Question";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroCon />
      <Service />
      <ServiceCon />
      <Testimonial />
      <Question />
    </>
  );
};

export default Home;
