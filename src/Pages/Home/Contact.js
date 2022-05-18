import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import bgContact from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div style={{ background: `url(${bgContact})` }}>
      <h3 className="text-primary text-xl font-bold text-center my-2">
        Contact Us
      </h3>
      <h2 className="text-3xl font-bold text-center mb-2">
        Stay Connected with Us
      </h2>
      <form className="flex flex-col justify-center items-center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          width="480x"
          className="px-2 py-1 rounded-md my-3"
        />
        <input
          type="text"
          placeholder="Subject"
          className="px-2 py-1 rounded-md my-3"
          width="480px"
        />
        <textarea
          name="message"
          id="message"
          cols="25"
          rows="5"
          placeholder="Type Your Message Here"
          className="px-2 py-1 rounded-md my-3"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default Contact;
