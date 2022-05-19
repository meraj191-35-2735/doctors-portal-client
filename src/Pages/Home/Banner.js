import React from "react";
import chair from "../../assets/images/chair.png";
import chairBg from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <div
      style={{
        background: `url(${chairBg})`,
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm  rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold text-white">
            Your New Smile Starts Here!
          </h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
