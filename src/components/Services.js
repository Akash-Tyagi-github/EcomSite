import React from "react";
import "./Services.css";
import { RiTruckFill } from "react-icons/ri";
const Services = () => {
  return (
    <>
      <div className="all-services">
        <div className="service-1">
          <RiTruckFill id="icon" />
          <h3>Super Fast and Free Delivery</h3>
        </div>
        <div className="service-2">
          <div className="service-2-inner">
            <RiTruckFill id="icon" />
            <h3>Super Fast and Free Delivery</h3>
          </div>
          <div className="service-2-inner">
            <RiTruckFill id="icon" />
            <h3>Super Fast and Free Delivery</h3>
          </div>
        </div>
        <div className="service-3">
        <RiTruckFill id="icon" />
            <h3>Super Fast and Free Delivery</h3>
        </div>
      </div>
    </>
  );
};

export default Services;
