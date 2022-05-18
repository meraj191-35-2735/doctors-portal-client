import React from "react";

const InfoCard = ({ title, image, text, bgClass }) => {
  return (
    <div class={`card lg:card-side shadow-xl ${bgClass}`}>
      <figure className="pl-5">
        <img src={image} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-white">{title}</h2>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
