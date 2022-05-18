import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 py-12">
      <InfoCard
        title="Opening Hours"
        image={clock}
        text="From 8:00AM To 10PM"
        bgClass="bg-primary"
      ></InfoCard>
      <InfoCard
        title="Visit Our Location"
        image={marker}
        text="Dhanmondi 32,Dhaka"
        bgClass="bg-accent"
      ></InfoCard>
      <InfoCard
        title="Contact Us Now"
        image={phone}
        text="+8801710346426"
        bgClass="bg-primary"
      ></InfoCard>
    </div>
  );
};

export default Info;
