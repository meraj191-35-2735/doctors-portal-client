import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
      image: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "During the filling process, some tooth cavities may require that the overall tooth be modified in shape by wedging or shaping. This can lead to a weakening in the overall structure of the tooth.",
      image: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Tooth whitening is the process of lightening the color of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons and can be achieved by changing the intrinsic or extrinsic color of the tooth enamel.",
      image: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center ">
        <h3 className="mb-5 text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl mb-5">Services We Provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {services.map((service) => (
            <Service service={service} key={service._id}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
