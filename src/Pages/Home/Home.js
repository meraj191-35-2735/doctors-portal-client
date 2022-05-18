import React from "react";
import Banner from "./Banner";
import ExtraCare from "./ExtraCare";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <ExtraCare></ExtraCare>
    </div>
  );
};

export default Home;
