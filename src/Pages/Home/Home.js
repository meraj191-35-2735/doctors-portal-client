import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import ExtraCare from "./ExtraCare";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <ExtraCare></ExtraCare>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
