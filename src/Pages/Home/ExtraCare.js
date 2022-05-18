import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ExtraCare = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row">
        <img
          className="w-full lg:w-1/2 h-full lg:h-1/2 mr-auto lg:mr-10 rounded-lg"
          src={treatment}
        />
        <div className="ml-10">
          <h1 class="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is in the seeking of exceptional dental care, that discerning
            patients will want to pay extra close attention to the dental
            practitioner they choose. We enjoy a sterling reputation for the
            incomparable quality care we give to our patients. Our dentist
            Sheffield is not only highly proficient in a diverse range of
            quality treatments and procedures, but also has a compassionate and
            comforting bedside manner that patients find engaging and
            encouraging. We believe that this success is due to our philosophy
            which centres on the interests of our patients.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ExtraCare;
