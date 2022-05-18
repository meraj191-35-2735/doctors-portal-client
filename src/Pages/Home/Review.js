import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p className="text-white">{review.review}</p>
        <div class="flex items-center mt-5">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.image} alt="profile" />
            </div>
          </div>
          <div className="ml-5">
            <h4 className="text-white text-xl">{review.name}</h4>
            <p className="text-white ">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
