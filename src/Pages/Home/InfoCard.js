import React from "react";

const InfoCard = ({ title, image, text, bgClass }) => {
  return (
    <div className={`card lg:card-side shadow-xl ${bgClass}`}>
      <figure className="pl-5 pt-5 lg:pt-0">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
