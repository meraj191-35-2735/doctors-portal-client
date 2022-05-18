import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "Great medical office, wonderful and warm experience from start to finish.",
      image: people1,
      location: "Australia",
    },
    {
      _id: 2,
      name: "Olivia Jenny",
      review:
        "Great experience as a first timer. I barely waited to be helped when I checked in.",
      image: people2,
      location: "America",
    },
    {
      _id: 3,
      name: "Daniela Ava",
      review:
        "It took me a while to find a doctor that made me feel comfortable and welcome!",
      image: people3,
      location: "Iran",
    },
  ];
  return (
    <section className="my-24">
      <div className="flex justify-between">
        <div>
          <h4 className="text-primary text-xl font-bold">Testimonials</h4>
          <h2 className="text-3xl text-white">What our Patients Say</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
