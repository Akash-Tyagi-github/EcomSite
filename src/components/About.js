import React, { useContext } from "react";
import HeroSection from "./HeroSection";
import { useProductContext } from "./Context/productcontext";
const About = () => {
  const {myName}  = useProductContext();

  const data = {
    name: "Our Online Store",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
